<template>
  <div class="overflow-x-auto">
    <div class="bg-base-200">
      <div class="grid grid-rows-2 grid-flow-col gap-4 p-5">
        <div class="row-span-2 flex">
            <img :src="data.picture"  class="max-w-sm rounded-lg shadow-2xl" />
             <p class="py-2 ml-5">{{data.artist_name}}</p>
        </div>
        <div class="row-span-2 col-span-2">
            <h1 class="text-5xl font-bold">{{data.song_name}}</h1>
          <div v-html="data.lyrics"></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { params: { path } } = useRoute();
const {data} = await useFetch("/api/get-lyrics",{
  params: {
    path
  }
})
</script>