<template>
  <div class="navbar flex justify-between bg-base-100">

    <NuxtLink to="/">
      <div class="mr-10 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><circle cx="6" cy="18" r="3" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="18" cy="17" r="3" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path fill="currentColor" d="M21 3L9 6v4l12-3z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18v-8m12 7V7M9 10V6l12-3v4M9 10l12-3"/></g></svg>
        <h3 class="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 lg:block">Song Verse Hub</h3>
      </div>
    </NuxtLink>

       <MainSearch/>

      <ul class="menu menu-horizontal px-1">
        <li><a>Link</a></li>
        <li>
          <details>
            <summary>
              Parent
            </summary>
            <MainLanguageSelector />
          </details>
        </li>
      </ul>
    </div>

</template>
<script setup lang="ts">
</script>