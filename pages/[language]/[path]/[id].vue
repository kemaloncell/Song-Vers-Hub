<template>
  <div class="overflow-x-auto">
    <div class="bg-base-200">
      <div class="grid grid-rows-2 grid-flow-col gap-4 p-5">
        <div class="row-span-2 flex">
            <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
             <p class="py-2 ml-5">{{lyrics.artist_name}}</p>
        </div>
        <div class="row-span-2 col-span-2">
            <h1 class="text-5xl font-bold">{{lyrics.song_name}}</h1>
            <p class="py-2">{{lyrics.lyrics}}</p>
            <p class="py-2">Provident cupiditat In deleniti eaque aut repudiandae et a id nisi.</p>
            <p class="py-2">Provident cupiditat In deleniti eaque aut repudiandae et a id nisi.</p>
            <p class="py-2">Provident cupiditat In deleniti eaque aut repudiandae et a id nisi.</p>
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
  try {
    const lyricsResponse = await lyricsService.getLyrics(params.path);
    lyrics.value = lyricsResponse.data;
    console.log("lyricsResponse 1", lyricsResponse)

  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>