<template>
  <div class="min-h-screen bg-void flex flex-col">
    <MobileStatusBar />
    <MobileTopNav />
    
    <main class="pt-28 pb-16 flex-1">
      <RouterView />
    </main>
    
    <MobileTabBar />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import MobileStatusBar from './MobileStatusBar.vue';
import MobileTopNav from './MobileTopNav.vue';
import MobileTabBar from './MobileTabBar.vue';
</script>

<style scoped>
</style>
