<script lang="ts" setup>
import { ITab } from '../types'
//TODO: destructurization on Tab and Tabs
defineProps<{
  tabs: ITab[],
  activeTab: string
}>()

interface Emits {
  (e: 'tab-change', tabs: string): void
}

const emit = defineEmits<Emits>()
</script>

<template>
  <div>
    <nav class="flex space-x-7">
      <a class="
        text-lg rounded-2xl px-7 py-3 text-white drop-shadow-lg hover:bg-orange cursor-pointer  
        transition delay-150 select-none
        "        
        :class="id === activeTab ? 'bg-orange' : 'bg-movie-black-200'"
        v-for="{ title, emoji, id } in tabs" 
        :key="id" 
        @click="emit('tab-change', id)"
      >
        {{ emoji }}
        {{ title }}
      </a>
    </nav>
  </div>
</template>