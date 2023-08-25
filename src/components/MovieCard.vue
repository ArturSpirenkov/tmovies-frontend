<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid'

interface PropsMovieFeed {
  title: string
  poster: string
  year: string
  id: string
  rate: string
  link?: string
}
const props = defineProps<PropsMovieFeed>()

</script>
<template>
  <div>
    <img
      :src="poster"
      alt="movie poster"
      class="h-44 w-96 rounded-2xl drop-shadow-xl"
    />
    <div class="flex mt-4 justify-between">
      <h2 class="text-white text-xl">{{ props.title }}</h2>
      <div class="w-30 flex items-center">
        <h3 class="text-gray-600">{{ props.year }}</h3>
        <h3 class="text-gray-600 flex w-full ml-4">
          <StarIcon class="text-orange w-4 mr-1" />
          {{ props.rate }}
        </h3>
      </div>
    </div>
  </div>
</template>

<style></style>