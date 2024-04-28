<script setup>
import { useConfig } from "~/composables";

const { languageBasedConfigs} = useConfig();

useHead({
  titleTemplate: '%s - Song Vers Hub',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  title: languageBasedConfigs.value?.settings?.meta_title,
  meta: [
    { name: 'description', content: languageBasedConfigs.value?.settings?.meta_description }
  ],
});
</script>

<template>
  <MainContainer :settings="languageBasedConfigs.settings" >
    <UiMusicList/>
  </MainContainer>
</template>