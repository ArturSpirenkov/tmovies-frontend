<script lang="ts" setup>
import { useRoute } from "vue-router";
import {
  HomeIcon,
  FilmIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline"

import {
  HomeIcon as HomeSolidIcon,
  FilmIcon as FilmSolidIcon,
  MagnifyingGlassIcon as MagnifyingGlassSolidIcon,
} from "@heroicons/vue/24/solid"

const menu = [
  {
    to: '/',
    icon: HomeIcon,
    activeIcon: HomeSolidIcon,
  },
  {
    to: '/search',
    icon: MagnifyingGlassIcon,
    activeIcon: MagnifyingGlassSolidIcon,
  },
  {
    to: '/movies',
    icon: FilmIcon,
    activeIcon: FilmSolidIcon,
  },
]

const route = useRoute()

</script>

<template>
  <nav class="block bg-movie-black-200">
    <div class="relative flex flex-col p-10 space-y-3">
      <router-link 
        v-for="{ to, icon, activeIcon } in menu" 
        :to="to" 
        :key="to"
        :class="[
          route.path === to
            ? 'bg-movie-black-400 text-white'
            : 'text-gray-600 hover:bg-movie-black-400',
          'inline-flex items-center justify-center h-14 w-14 rounded-lg transition delay-150',
        ]"
      >
        <component :is="route.path === to ? activeIcon : icon" class="h-10 w-10"></component>
      </router-link>
    </div>
  </nav>
</template>