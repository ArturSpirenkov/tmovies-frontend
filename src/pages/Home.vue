<script lang="ts" setup>
import Page from '../components/layout/Page.vue'
import { tabsMock } from '../mocks/tabs'
import Tab from '../components/Tab.vue'
import { ref } from 'vue'
import FlashNews from '../components/FlashNews.vue';
import MainBanner from '../components/MainBanner.vue';
import ContentRow from '../components/ContentRow.vue';

const activeTab = ref<string>(tabsMock[0].id)
const tabChange = (id: string) => {
  activeTab.value = id
}
</script>

<template>
  <Page class="pl-4 overflow-hidden" >
    <template #title> Movie </template>
    <div>
      <Tab 
        :tabs="tabsMock" 
        :active-tab="activeTab" 
        @tab-change="tabChange" 
      />
    </div>
    <ContentRow>
      <MainBanner />
      <div>
        <FlashNews />
      </div>
    </ContentRow>
  </Page>
</template>
