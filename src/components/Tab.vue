<script lang="ts" setup>
import { Tab } from '../types'

defineProps<{
  tabs: Tab[]
}>()

</script>

<template>
  <div>
    <nav class="flex space-x-7">
      <a 
        class="bg-movie-black-200 text-lg rounded-xl px-5 py-2 text-white drop-shadow-lg hover:bg-oranje"
        v-for="{ title, emoji, id} in tabs"
        :key="id"
      >
        {{ emoji }}
        {{ title }}
      </a>
    </nav>
  </div>
</template>