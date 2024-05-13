<script setup>

const props = defineProps({
  settings: {
    type: Object,
    required: true,
  },
})


</script>
<template>
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 role="heading" class="text-center text-2xl font-bold text-gray-800 mt-5">
      {{ settings.title }}
    </h1>
    <p role="contentinfo" class="text-base leading-normal text-center text-gray-600 mt-2 mb-5">
      {{ settings.description }}
    </p>
       <slot />
  </div>
</template>
