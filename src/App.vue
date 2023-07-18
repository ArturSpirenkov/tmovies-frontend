<script lang="ts" setup>
import Sidebar from './components/layout/Sidebar.vue';
</script>

<template>
  <div class="flex h-screen flex-col">
    <div class="flex flex-1 overflow-hidden">
      <Sidebar />
      <main class="min-w-0 lg:flex flex-1">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
