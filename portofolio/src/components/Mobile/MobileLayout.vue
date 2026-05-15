<template>
  <div class="min-h-screen bg-void flex flex-col">
    <MobileTopNav />
    
    <main class="pt-16 pb-16 flex-1">
      <RouterView />
    </main>
    
    <MobileTabBar />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import MobileTopNav from './MobileTopNav.vue';
import MobileTabBar from './MobileTabBar.vue';
</script>

<style scoped>
</style>
