<template>
  <nav class="fixed bottom-0 left-0 right-0 z-40 bg-ink/96 backdrop-blur-2xl border-t border-dark-border flex items-start">
    <div class="flex flex-1 h-16 gap-0">
      <RouterLink
        v-for="item in tabs"
        :key="item.path"
        :to="item.path"
        class="flex-1 flex flex-col items-center justify-center gap-1 transition-transform active:scale-75 relative"
        :class="{ 'active': isActive(item.path) }"
      >
        <div class="absolute top-1.5 w-5 h-0.5 bg-acid rounded-full opacity-0 scale-x-30 transition-all duration-200" :class="{ 'opacity-100 scale-x-100': isActive(item.path) }"></div>
        <span class="text-lg leading-none transition-transform duration-200" :class="{ 'scale-110': isActive(item.path) }">
          {{ item.icon }}
        </span>
        <span class="text-xs font-mono tracking-wider uppercase text-silver transition-colors duration-200" :class="{ 'text-acid': isActive(item.path) }">
          {{ item.label }}
        </span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';

const route = useRoute();

const tabs = [
  { path: '/home', label: 'Home', icon: '⌂' },
  { path: '/work', label: 'Work', icon: '◈' },
  { path: '/skills', label: 'Skills', icon: '◎' },
  { path: '/lab', label: 'Lab', icon: '⚗' },
  { path: '/contact', label: 'Contact', icon: '✉' },
];

function isActive(path) {
  return route.path === path;
}
</script>

<style scoped>
</style>
