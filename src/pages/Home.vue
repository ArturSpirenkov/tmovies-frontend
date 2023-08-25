<script lang="ts" setup>
import Page from '../components/layout/Page.vue'
import { tabsMock } from '../mocks/tabs'
import Tab from '../components/Tab.vue'
import { ref } from 'vue'
import FlashNews from '../components/FlashNews.vue';
import MainBanner from '../components/MainBanner.vue';
import ContentRow from '../components/ContentRow.vue';
import MovieFeed from '../components/MovieFeed.vue';

const activeTab = ref<string>(tabsMock[0].id)
const tabChange = (id: string) => {
  activeTab.value = id
}
</script>

<template>
  <Page paddingless>
    <template #title> Movie </template>
    <div class="ml-4"> 
      <Tab 
        :tabs="tabsMock" 
        :active-tab="activeTab" 
        @tab-change="tabChange" 
      />
      <ContentRow>
        <MainBanner />
        <div>
          <FlashNews />
        </div>
      </ContentRow>
    </div>
    <ContentRow class="flex-col">
      <h1 class=" text-2xl text-white font-bold">Special for you</h1>
      <MovieFeed />
    </ContentRow>
  </Page>
</template>
