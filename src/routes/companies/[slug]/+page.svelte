<script>
  import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';
  import { toTitleCase } from '$lib';
  import { navbarVariant } from '$lib/state.svelte.js';

  navbarVariant.update('goback');
  let {data} = $props();
  let company = data.company[0];
</script>

<svelte:head>
  <title>{toTitleCase(company.name)} - Directorio Agricola</title> 
</svelte:head>

<section class="container mx-auto px-4 py-8">
  <div class="grid grid-cols-1 gap-12">
    <div class="flex flex-col items-start gap-4">
      {#if company.logo}
        <img src="/logos/{company.logo}" class="h-16 w-auto" alt="Logo de {toTitleCase(company.name)}">
      {/if}
      <h1>{toTitleCase(company.name)}</h1>
      {#if company.category}
        <span class="inline-flex align-middle gap-x-1.5 py-1 px-3 rounded-lg font-medium bg-primary-light text-[#413E37]">{toTitleCase(company.category)}</span>
      {/if}
      {#if company.employees}
        <span class="flex flex-row gap-1 items-center">
          <svg class="text-secondary" width="15" height="14" viewBox="0 0 15 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0625 12.1875H13.125V5.625C13.125 5.37636 13.0262 5.1379 12.8504 4.96209C12.6746 4.78627 12.4361 4.6875 12.1875 4.6875H8.4375V1.875C8.43761 1.70523 8.39162 1.53862 8.30444 1.39295C8.21726 1.24728 8.09215 1.12801 7.94249 1.04788C7.79282 0.967756 7.6242 0.929773 7.45463 0.937988C7.28506 0.946204 7.12091 1.00031 6.97969 1.09453L2.29219 4.21875C2.1636 4.30454 2.05822 4.4208 1.98543 4.55718C1.91264 4.69355 1.87471 4.84581 1.875 5.00039V12.1875H0.9375C0.81318 12.1875 0.693951 12.2369 0.606044 12.3248C0.518136 12.4127 0.46875 12.5319 0.46875 12.6563C0.46875 12.7806 0.518136 12.8998 0.606044 12.9877C0.693951 13.0756 0.81318 13.125 0.9375 13.125H14.0625C14.1868 13.125 14.306 13.0756 14.394 12.9877C14.4819 12.8998 14.5312 12.7806 14.5312 12.6563C14.5312 12.5319 14.4819 12.4127 14.394 12.3248C14.306 12.2369 14.1868 12.1875 14.0625 12.1875ZM12.1875 5.625V12.1875H8.4375V5.625H12.1875ZM2.8125 5.00039L7.5 1.875V12.1875H2.8125V5.00039ZM6.5625 6.5625V7.5C6.5625 7.62432 6.51311 7.74355 6.42521 7.83146C6.3373 7.91937 6.21807 7.96875 6.09375 7.96875C5.96943 7.96875 5.8502 7.91937 5.76229 7.83146C5.67439 7.74355 5.625 7.62432 5.625 7.5V6.5625C5.625 6.43818 5.67439 6.31895 5.76229 6.23105C5.8502 6.14314 5.96943 6.09375 6.09375 6.09375C6.21807 6.09375 6.3373 6.14314 6.42521 6.23105C6.51311 6.31895 6.5625 6.43818 6.5625 6.5625ZM4.6875 6.5625V7.5C4.6875 7.62432 4.63811 7.74355 4.55021 7.83146C4.4623 7.91937 4.34307 7.96875 4.21875 7.96875C4.09443 7.96875 3.9752 7.91937 3.88729 7.83146C3.79939 7.74355 3.75 7.62432 3.75 7.5V6.5625C3.75 6.43818 3.79939 6.31895 3.88729 6.23105C3.9752 6.14314 4.09443 6.09375 4.21875 6.09375C4.34307 6.09375 4.4623 6.14314 4.55021 6.23105C4.63811 6.31895 4.6875 6.43818 4.6875 6.5625ZM4.6875 9.84375V10.7813C4.6875 10.9056 4.63811 11.0248 4.55021 11.1127C4.4623 11.2006 4.34307 11.25 4.21875 11.25C4.09443 11.25 3.9752 11.2006 3.88729 11.1127C3.79939 11.0248 3.75 10.9056 3.75 10.7813V9.84375C3.75 9.71943 3.79939 9.6002 3.88729 9.5123C3.9752 9.42439 4.09443 9.375 4.21875 9.375C4.34307 9.375 4.4623 9.42439 4.55021 9.5123C4.63811 9.6002 4.6875 9.71943 4.6875 9.84375ZM6.5625 9.84375V10.7813C6.5625 10.9056 6.51311 11.0248 6.42521 11.1127C6.3373 11.2006 6.21807 11.25 6.09375 11.25C5.96943 11.25 5.8502 11.2006 5.76229 11.1127C5.67439 11.0248 5.625 10.9056 5.625 10.7813V9.84375C5.625 9.71943 5.67439 9.6002 5.76229 9.5123C5.8502 9.42439 5.96943 9.375 6.09375 9.375C6.21807 9.375 6.3373 9.42439 6.42521 9.5123C6.51311 9.6002 6.5625 9.71943 6.5625 9.84375Z" fill="currentColor"/>
          </svg>
          Empleados: {company.employees.toLowerCase()} personas
        </span>
      {/if}
    </div>

    <div class="flex flex-col items-start gap-4">
      <div>
        <span class="block font-medium text-base">Página web</span>
        {#if company.websiteURL}        
          <a class="block text-base" href={company.websiteURL.toLowerCase()} target="_blank" rel="noopener noreferrer">{company.websiteURL.toLowerCase()}</a>
        {:else}
          <span class="block text-base">Sin página web</span>
        {/if}
      </div>
      <div>
        <span class="block font-medium text-base">Domicilio</span>
        {#if company.address}        
          <span class="block text-base">{toTitleCase(company.address)}</span>
        {:else}
          <span class="block text-base">Sin domicilio registrado</span>
        {/if}
      </div>
    </div>
    {#if company.latitude && company.longitude}
      <div class="w-full">
        <iframe
        class="w-full h-96"
        title="Ubicación en mapa de {toTitleCase(company.name)}"
        frameborder="0" style="border:0"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key={PUBLIC_GOOGLE_MAPS_API_KEY}&q={company.latitude},{company.longitude}&language=es&zoom=13"
        allowfullscreen>
        </iframe>
      </div>
    {/if}
  </div>
</section>