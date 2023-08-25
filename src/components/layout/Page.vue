<script lang="ts" setup>
interface Props {
  title?: string;
}

defineProps<Props>()
</script>

<template>
  <section class="bg-movie-black flex h-full min-w-0 flex-1 flex-col overflow-y-auto w-full">
    <div class="my-4 flex justify-between">
      <h1 v-if="title" class="text-4xl font-weight-900 font-bold text-white">
        {{ title }}
      </h1>
      <h1 v-else class="text-4xl font-weight-900 font-bold text-white">
        <slot name="title" />
      </h1>
      <div class="text-gray-600">
        <slot name="header" />
      </div>
    </div>
    <div class="text-white">
      <slot></slot>
    </div>
  </section>
</template>