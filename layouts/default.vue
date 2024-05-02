<script setup lang="ts">

import Search from "~/components/main/Search.vue";
</script>

<template>
  <div class="flex flex-col h-screen justify-between bg-gray-200 min-h-screen ">
   <MainHeader/>
       <slot />
    <MainFooter/>
  </div>

</template>
