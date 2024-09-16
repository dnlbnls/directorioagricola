<script>
  import Companies from "$lib/Companies.svelte";
  import Modal from "$lib/Modal.svelte";
  import { navbarVariant, companies, filters } from '$lib/state.svelte.js';
  navbarVariant.update('default');

  let { data } = $props();

  if( Object.keys(companies.companies).length === 0 ){
    companies.update([...data.companies]);
  }

  let loadingCompanies = $state(false);

  let filterCatalog = {
    categories: ['Alquiler y Bienes Raíces', 'Comercio al por Mayor', 'Comercio al por Menor', 'Construcción y Obras', 'Empaque y Conservación', 'Energía y Combustibles', 'Fabricación', 'Financieros y Seguros', 'Laboratorios y Pruebas', 'Organizaciones y Asociaciones', 'Reciclaje y Residuos', 'Reparación y Mantenimiento', 'Riego y Suministro de Agua', 'Servicios Agropecuarios', 'Servicios Especializados', 'Servicios de Consultoría', 'Servicios de Protección y Seguridad', 'Veterinaria'],
    states: ['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila de Zaragoza', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Michoacán de Ocampo', 'Morelos', 'México', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis PotosÌ', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz de Ignacio de la Llave', 'Yucatán', 'Zacatecas']
  }

  async function updateFilters(newValue, dimension){
    modalShow = false;
    if(dimension == 'categories'){
      filters.category = newValue;
    }else if(dimension == 'states'){
      filters.state = newValue;
    }
    await updateCompanies();
  }

  async function updateCompanies(){
    loadingCompanies = true;
    const params = new URLSearchParams({
      page: 1,
      category: filters.category ? filters.category : '',
      state: filters.state ? filters.state : ''
    });

    let response = await fetch('/api/companies/?'+params);
    if (response.ok) {
      let newItems = await response.json();
      companies.update([...newItems]);
    }
    loadingCompanies = false;
  }


  let modalId = $state('');
  let modalTitle = $state('');
  let modalShow = $state(false);
  let filterOptions = $state();
  let filterDimension = $state();

  function updateModal(id, title, show, options, dimension){
    modalId = id;
    modalTitle = title;
    modalShow = show;
    filterOptions = options;
    filterDimension = dimension;
  }
</script>


  <svelte:head>
      <title>Directorio Agricola</title> 
  </svelte:head>
  
  <section class="container mx-auto px-4 py-8 flex flex-col gap-4">
    <div>
      <h1>Encuentra negocios y servicios para tu agrícola</h1>
    </div>
    <div class="flex flex-row gap-3 flex-wrap">
      {#if filters.category}
        <button
        class="flex items-center gap-x-1.5 py-[0.15rem] px-4 rounded-lg font-medium bg-primary-light text-[#413E37] hover:bg-[#afa698]"
        type="button"
        onclick={() => updateFilters(undefined, 'categories')}>
        {filters.category}
          <svg class="shrink-0 size-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      {:else}
        <button
        class="inline-flex align-middle gap-x-1.5 py-[0.15rem] px-4 rounded-lg font-medium bg-primary-light text-[#413E37] hover:bg-[#afa698]"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="filtersModal"
        data-hs-overlay="#filtersModal"
        onclick={() => updateModal('filtersModal', 'Categorias', true, filterCatalog.categories, 'categories')}>Categoría</button>
      {/if}
  
      {#if filters.state}
        <button
        class="flex items-center gap-x-1.5 py-[0.15rem] px-4 rounded-lg font-medium bg-primary-light text-[#413E37] hover:bg-[#afa698]"
        type="button"
        onclick={() => updateFilters(undefined, 'states')}>
        {filters.state}
          <svg class="shrink-0 size-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      {:else}
        <button
        class="inline-flex align-middle gap-x-1.5 py-[0.15rem] px-4 rounded-lg font-medium bg-primary-light text-[#413E37] hover:bg-[#afa698]"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="filtersModal"
        data-hs-overlay="#filtersModal"
        onclick={() => updateModal('filtersModal', 'Estado', true, filterCatalog.states, 'states')}>Estado</button>
      {/if}
    </div>
  </section>


  <section class="container mx-auto px-0 sm:px-4">
    {#if Object.keys(companies.companies).length === 0}
      No se encontraron resultados. Intenta con filtros diferentes.  
    {:else}
      <div class="border border-primary-light">
        <Companies bind:items={companies.companies} bind:loadingCompanies={loadingCompanies} bind:categoryFilter={filters.category} bind:stateFilter={filters.state}/>
      </div>
    {/if}
  </section>


<Modal bind:id={modalId} bind:title={modalTitle} bind:show={modalShow}>
  <div>
    {#if filterOptions}      
      {#each filterOptions as option}
        <button type="button" class="block w-full text-left py-2 hover:bg-gray-100 border-b border-gray-100" onclick={() => updateFilters(option, filterDimension)}>{option}</button>
      {/each}
    {/if}
  </div>
</Modal>