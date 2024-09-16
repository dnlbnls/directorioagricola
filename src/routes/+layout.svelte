<script>
  import "../app.css";
  import Navbar from "$lib/Navbar.svelte";
  import { navbarVariant } from '$lib/state.svelte.js';
  let { children } = $props();
</script>

<Navbar variant={navbarVariant.variant}/>

{@render children()}

<style lang="postcss">
:global(html, body) {
  color: theme(colors.text);
  background-color: theme(colors.background);
}
</style>