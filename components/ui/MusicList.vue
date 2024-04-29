<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Artist</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Album</th>
      </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">

      <tr v-for="song in songs" :key="song.song_id">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{song.song_id}}</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <NuxtLink :to="`/${getLanguage}/${song.path}/${song.song_id}`" class="flex items-center">
            <img class="h-8 w-8  mr-2" src="https://via.placeholder.com/50" alt="Artist Image">
            <span class="text-sm font-medium text-gray-900">{{song.artist_name}}</span>
          </NuxtLink>
        </td>
          <NuxtLink :to="`/${getLanguage}/${song.path}/${song.song_id}`">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{song.song_name}}</td>
          </NuxtLink>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useConfig } from "~/composables";
import songsService from "~/services/songsService.js";
const { getLanguage} = useConfig();

const songs = ref([])

onMounted(async () => {
  try {
    const songsResponse = await songsService.getSongs();
    songs.value = songsResponse.data.content;
    console.log("songsResponse", songs.value)


  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>