<script lang="ts" setup>
interface PropsPage {
  title?: string
  paddingless: boolean
}
const props = withDefaults(defineProps<PropsPage>(),
  {
    paddingless: false
  }
)
</script>

<template>
  <section class="bg-movie-black flex h-full min-w-0 flex-1 flex-col overflow-y-auto w-full">
    <div class="my-4 flex justify-between pl-4">
      <h1 v-if="props.title" class="text-4xl font-weight-900 font-bold text-white">
        {{ props.title }}
      </h1>
      <h1 v-else class="text-4xl font-weight-900 font-bold text-white">
        <slot name="title" />
      </h1>
      <div class="text-gray-600">
        <slot name="header" />
      </div>
    </div>
    <div :class="props.paddingless ? '' : 'ml-4'">
      <slot></slot>
    </div>
  </section>
</template>