<script lang="ts" setup>

interface Banner {
  title: string
  plot: string
  poster: string
  duration: string
  genre: string
  id: string
  year: string
}

const bannerMock: Banner = {
  title: 'Interstellar',
  plot: 'When Earth becomes uninhabitable in the future, a framer and ex-NASA pilot, Joseph Cooper tasks to pilot a spacecraft along with a team of researchers, to find a new planet for humans',
  year: '2014',
  id: '1',
  genre: 'Fiction',
  duration: '1h 53min',
  poster: 'https://c4.wallpaperflare.com/wallpaper/88/698/360/space-black-hole-interstellar-planet-wallpaper-preview.jpg'
}

const bgImg = `url(${bannerMock.poster})`
</script>

<template>
  <div class="banner flex p-8 w-full h-[450px] rounded-2xl drop-shadow-xl cursor-pointer">
    <div class="self-end">
      <h1 class="mb-2 text-4xl font-bold">{{ bannerMock.title }}</h1>
      <p> {{ bannerMock.plot }}</p>
      <div class="mt-2 flex justify-between w-[25%]">
        <span>{{ bannerMock.year }}</span>
        <span>{{ bannerMock.genre }}</span>
        <span>{{ bannerMock.duration }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-image: v-bind(bgImg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>