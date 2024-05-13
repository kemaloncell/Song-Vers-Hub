<template>
  <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between py-3 px-2" aria-label="Table navigation">
    <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">{{currentPage}}-{{ totalPages }}</span> </span>
    <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 ">
      <li>
        <a
            @click="$emit('change', currentPage - 1)"
            :class="{'pointer-events-none ' : currentPage === 1, }"
            class=" flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><</a>
      </li>
      <li v-for="pageNumber of 5" :key="pageNumber" >
        <a @click="$emit('change', pageNumber)"
           :class="{'bg-gray-100 text-gray-700' : currentPage <= totalPages && currentPage === pageNumber}"
           class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ pageNumber}}</a>
      </li>
      <li>
        <a @click="$emit('change', currentPage + 1)"
           :class="{'bg-gray-100 text-gray-700' : currentPage > 5, 'pointer-events-none ' : currentPage === totalPages,}"
           class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">></a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  totalPages: Number,
  currentPage: Number,
})
defineEmits(['change'])
</script>