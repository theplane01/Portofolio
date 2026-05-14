<template>
  <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 mix-blend-exclusion">
    <div class="font-mono text-xs font-bold text-chalk tracking-widest uppercase">
      Vourel Avin
    </div>
    
    <div class="flex gap-8">
      <RouterLink 
        v-for="item in navItems" 
        :key="item.path"
        :to="item.path"
        class="text-xs font-bold text-chalk tracking-widest uppercase transition-colors hover:text-acid interactive"
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const navItems = [
  { path: '/home', label: 'Home' },
  { path: '/work', label: 'Work' },
  { path: '/skills', label: 'Skills' },
  { path: '/lab', label: 'Lab' },
  { path: '/contact', label: 'Contact' },
];
</script>

<style scoped>
</style>
