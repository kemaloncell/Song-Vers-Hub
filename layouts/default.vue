<script setup lang="ts">

import Search from "~/components/main/Search.vue";
</script>

<template>
  <div class="bg-gray-200 min-h-screen ">
   <MainHeader/>
       <slot />
    <MainFooter/>
  </div>

</template>
