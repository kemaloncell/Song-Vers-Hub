<script setup>
import settings from '~/pageConfigs/settings';

useHead({
  titleTemplate: '%s - Song Vers Hub',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  title: settings?.meta_title,
  meta: [
    { name: 'description', content: settings?.meta_description }
  ],
});
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 role="heading" class="text-center text-2xl font-bold text-gray-800 mt-5">
      {{ settings.title }}
    </h1>
    <p role="contentinfo" class="text-base leading-normal text-center text-gray-600 mt-2 mb-5">
      {{ settings.description }}
    </p>
    <UiMusicList/>
  </div>
</template>>