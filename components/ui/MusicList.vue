<template>
  <div class="table-container max-h-screen overflow-auto shadow-md sm:rounded-lg mb-5">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="hidden md:block px-6 py-3">
          #Rank
        </th>
        <th scope="col" class="px-6 py-3">
          Artist
        </th>
        <th scope="col" class="px-6 py-3">
          Album
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(song, index) in data?.content" :key="song.song_id" class="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th class="hidden md:block px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {{index + 1}}
        </th>
        <td class="px-6 py-4">
          <NuxtLink :to="`/${getLanguage}/${song.path}/${song.song_id}`" class="flex items-center">
            <img class="h-8 w-8  mr-2" src="https://via.placeholder.com/50" alt="Artist Image">
            <span class="text-sm font-medium text-gray-900">{{song.artist_name}}</span>
          </NuxtLink>
        </td>
        <td class="px-6 py-4">
          <NuxtLink :to="`/${getLanguage}/${song.path}/${song.song_id}`">
           {{song.song_name}}
          </NuxtLink>
        </td>
      </tr>
      </tbody>
    </table>

  <UiPagination @change="handlePageNumber" :totalPages="data?.totalPages" :currentPage="page" />
  </div>


</template>

<script setup  lang="ts">
import { useConfig } from "~/composables";
const { getLanguage} = useConfig();

const page = ref(1)
const size = ref(10)
const { data } = await useFetch("/api/get-songs", {
  params: {
    page,
    size
  }
})
const handlePageNumber = (pageNumber: number) => {
  if(pageNumber === 0) pageNumber = 1
  page.value = pageNumber
}
</script>