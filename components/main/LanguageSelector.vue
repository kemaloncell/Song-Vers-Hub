<script setup>
const router = useRouter();
const route = useRoute();

const onChangeSelect = (event) => {
  router.push(`/${event.target.value}`)
}

const options = ref([
  {
    value: 'tr',
    text: 'Türkçe'
  },
  {
    value: 'en',
    text: 'English'
  },
])

const isSelected = (value) => {
  return route.params?.language === value;
}

</script>
<template>
  <ul class="p-2 bg-base-100 rounded-t-none"
      @change="onChangeSelect">
    <li v-for="option in options" :value="option.value" :selected="isSelected(option.value)">
      <nuxt-link :to="`/${option.value}`">{{ option.text }}</nuxt-link>
    </li>
  </ul>
</template>
