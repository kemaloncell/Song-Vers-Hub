<template>
  <div class="overflow-x-auto">
    <div class="hero  bg-base-200">
      <div class="hero-content flex-col lg:flex-row space-between">
        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">{{lyrics}}!</h1>
          <p class="py-6">Provident cupiditat In deleniti eaque aut repudiandae et a id nisi.</p>
          <p class="py-6">Provident cupiditat In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary">Get Started</button>
          {{$route.params}}
        </div>
      </div>
    </div>
  </div>



</template>

<script setup>

import lyricsService from "~/services/lyricsService.js";

const route = useRoute();
const { params } = route;
const lyrics = ref([])

onMounted(async () => {
  console.log(params)
  try {
    const lyricsResponse = await lyricsService.getLyrics(params.path);
    lyrics.value = lyricsResponse.data.content;
    console.log("lyricsResponse", lyrics.value)

  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>