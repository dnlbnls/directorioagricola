<script>
  let { variant = 'default', ...rest } = $props();
  let url = '/';
</script>

<nav class="border-b border-border border-primary-light">
  <div class="container mx-auto p-4">
      {#if variant == 'goback'}
        <a href={url} class="flex align-middle flex-row gap-2 no-underline text-text">
          <svg width="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.0008 10.0008C24.0008 10.266 23.8954 10.5204 23.7079 10.7079C23.5204 10.8954 23.266 11.0008 23.0008 11.0008H11.0008V19.0008C11.0009 19.1987 10.9424 19.3922 10.8325 19.5568C10.7226 19.7214 10.5664 19.8497 10.3836 19.9254C10.2008 20.0012 9.99956 20.021 9.80548 19.9823C9.6114 19.9437 9.43314 19.8483 9.29329 19.7083L0.293287 10.7083C0.20031 10.6154 0.126551 10.5051 0.0762269 10.3837C0.0259027 10.2623 0 10.1322 0 10.0008C0 9.86937 0.0259027 9.73925 0.0762269 9.61785C0.126551 9.49645 0.20031 9.38616 0.293287 9.29329L9.29329 0.293288C9.43314 0.153276 9.6114 0.0579087 9.80548 0.0192583C9.99956 -0.0193921 10.2008 0.000412494 10.3836 0.076165C10.5664 0.151917 10.7226 0.280212 10.8325 0.444805C10.9424 0.609399 11.0009 0.802892 11.0008 1.00079V9.00079H23.0008C23.266 9.00079 23.5204 9.10614 23.7079 9.29368C23.8954 9.48122 24.0008 9.73557 24.0008 10.0008Z" fill="currentColor"/></svg>
          <span class="font-medium">Regresar</span>
        </a>
      {:else}
        <a href="/" class="flex align-middle flex-row gap-2 no-underline text-text">
          <img src="/logodirectorioagricola.svg" alt="Directrio Agricola Logo" class="h-8 w-auto"/>
        </a>
      {/if}
  </div>
</nav>