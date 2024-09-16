<script>
  import CompanyItem from "./CompanyItem.svelte";
  import { onMount, onDestroy } from "svelte";
  import { companies } from '$lib/state.svelte.js';
  
  let { items = $bindable(), loadingCompanies = $bindable(false), categoryFilter = $bindable(), stateFilter = $bindable()  } = $props();

  let page = $state(1);

  let intersectionTarget = $state();
  let observer = $state();
  let isLoading = $state(false);

  $effect(() => {
    if(loadingCompanies){
      page = 1;
    }
  });

  async function loadMoreItems() {
    if (isLoading || loadingCompanies) return;
    isLoading = true;
    try {
      let params = new URLSearchParams({
        page: (page+1),
        category: categoryFilter ? categoryFilter : '',
        state: stateFilter ? stateFilter : ''
      });
      let response = await fetch('/api/companies/?'+params);
      if (response.ok) {
        let newItems = await response.json();
        companies.update([...companies.companies, ...newItems ]);
        page += 1;
      }
    } catch (error) {
      console.error('Error loading more items:', error);
    } finally {
      isLoading = false;
    }
  }

  onMount(() => {
    if (observer || !intersectionTarget) return;
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadMoreItems();
        }
      });
    }, {
      rootMargin: "50px",
    });
    observer.observe(intersectionTarget);
  });

  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  })



</script>

<div>
  {#each items as item}
    <CompanyItem id={item.id} slug={item.slug} logo={item.logo} name={item.name} employees={item.employees} location={item.location} mexicanstate={item.mexicanstate} category={item.category}/>
  {/each}
  <div class="px-4 pt-4 pb-20 flex flex-row items-center gap-4" bind:this={intersectionTarget}>
    {#if isLoading}
      <div class="animate-spin inline-block size-8 border-[3px] border-current border-t-transparent text-secondary rounded-full" role="status" aria-label="loading">
      </div>
      <p>Cargando más resultados...</p>
    {/if}
  </div>
</div>