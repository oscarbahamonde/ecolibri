<script>
import Cloud from './Cloud.svelte'
import { Link } from 'svelte-navigator'
export let route;
</script>

<div class="flex flex-col items-center bg-white">
{#if route=="home"}
<div class="bg-white rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full">Hello World</div>
{:else if route=="account"}
<div class=" bg-white rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full">Account</div>
{:else if route=="music"}
<div class="bg-white rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full">Music</div>
{:else if route=="cloud"}
<div class="rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full"><Cloud /></div>
{/if}

<div class="navbar bottom-0 fixed py-4 px-16 shadow-2xl flex flex-row justify-center w-auto rounded-lg bg-neutral">
<button class="social-icon mx-4 mdi-home" on:click={()=>{route = "home"}}></button>
<Link to="/profile"><button class="social-icon mx-4 mdi-account"></button></Link>
<button class="social-icon mx-4 mdi-store" on:click={()=>{route="music"}}></button>
<button class="social-icon mx-4 mdi-cart" on:click={()=>{route="cloud"}}></button>
</div>
</div>