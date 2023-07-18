<script lang="ts" setup>
import Page from '../components/layout/Page.vue'
import Tab from '../components/Tab.vue';
import { tabsMock } from '../mocks/tabs';

</script>

<template>
  <Page class="pl-4">
    <template #title> Movie </template>
    <div>
      <Tab :tabs="tabsMock"/>
    </div>
  </Page>
</template>
