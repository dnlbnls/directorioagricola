<script>
  let { id = $bindable('modal'), title = $bindable('Modal title'), children, show = $bindable(false), ...rest } = $props();

  function hideModal(event){
    if( (event.type === 'keydown' && event.key === 'Escape') || event.type === 'click' && (event.target.id === id || event.target.id === id+'-close-button') ){
      show = false;
    }
  }

</script>

<svelte:window onkeydown={hideModal} onclick={hideModal} />

<div
id="{id}"
role="dialog"
tabindex="-1"
aria-labelledby="{id}-title"
class="{show ? '' : 'hidden'} fixed z-40 left-0 top-0 size-full bg-gray-900 bg-opacity-50 overflow-x-hidden overflow-y-auto"
>
  <div class="max-h-[calc(100%-5rem)] sm:max-w-[40rem] sm:mx-auto mt-7 opacity-100 duration-500 ease-out transition-all m-3 overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
    <div class="flex justify-between items-center py-3 px-4 border-b">
      <h3 id="{id}-title">
        {title}
      </h3>
      <button id="{id}-close-button" data-hs-overlay="#{id}" onclick={hideModal} aria-label="Close" type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
        <svg class="shrink-0 size-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button>
    </div>
    <div class="p-4 overflow-y-auto">
      <div class="space-y-4">
        {#if children}
          {@render children()}
        {/if}
      </div>
    </div>
  </div>
</div>