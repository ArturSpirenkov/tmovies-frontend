<script lang="ts" setup>
import Stack from './Stack.vue'
import { flashNews } from '../mocks/news';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/solid';
import { computed, ref } from 'vue';

// Slider
const isBackDirection = ref<boolean>(false)
const currentSlideIndex = ref<number>(0)
const currentSlide = computed(() => flashNews[currentSlideIndex.value])
const isLastSlide = computed(() => currentSlideIndex.value >= flashNews.length - 1)

const nextSlide = () => {
  if (isLastSlide.value) {
    return
  }
  isBackDirection.value = true
  toggleLoading()
  currentSlideIndex.value++
}

const prefSlide = () => {
  if (currentSlideIndex.value === 0 ) {
    return
  }
  isBackDirection.value = false
  toggleLoading()
  currentSlideIndex.value--
}

// Animations
const loading = ref<boolean>(false)

const toggleLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 300)
}
</script>

<template>
  <Stack>
    <transition :name="!isBackDirection ? 'slide-fade' : 'slide-fade-reverse' ">
      <div v-show="!loading" class="h-full bg-white p-6 rounded-2xl drop-shadow-md rotate-3 relative">
        <div class="news-top">
          <img 
            :src="currentSlide.image" 
            class="rounded-2xl aspect-video" 
            alt="sorry)"
          />
          <h2 class="text-orange mt-2 font-bold text-m">🔥Hot News</h2>
          <p class="mt-2 font-bold text-movie-black-400">{{ currentSlide.text }}</p>
        </div>
        <div class="news-footer flex absolute bottom-1 w-[85%] justify-between">
          <p class="text-gray-500 w-full">{{ currentSlide.date }}</p>
          <div class="text-gray-900 flex">
            <ArrowLeftIcon 
              v-if="currentSlideIndex > 0"
              class="w-5 mr-2" 
              @click="prefSlide"
            />
            {{ currentSlideIndex + 1 }}/{{ flashNews.length }}
            <ArrowRightIcon 
              v-if="!isLastSlide"
              class="w-5 ml-2" 
              @click="nextSlide"
            />
            <div v-else class="w-5 ml-2"></div>
          </div>
        </div>
      </div>
    </transition> 
  </Stack>
</template>

<style>
.slide-fade-enter-active,
.slide-fade-reverse-enter-active,
.slide-fade-reverse-leave-active,
.slide-fade-leave-active {
  transition: all .1s ease;
}

.slide-fade-enter {
  transform: translateX(100px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

/* Back Scrolling */
.slide-fade-reverse-enter {
  transform: translateX(-100px);
  opacity: 0;
}
.slide-fade-reverse-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>