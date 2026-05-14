<template>
  <div class="fixed top-7 left-0 right-0 z-40 h-16 bg-void/92 backdrop-blur-xl border-b border-dark-border flex items-center justify-between px-5">
    <div class="flex items-center gap-2.5">
      <div class="w-8 h-8 bg-gradient-to-br from-ember to-acid rounded-lg flex items-center justify-center text-ink text-xs font-bold flex-shrink-0">
        V
      </div>
      <div>
        <div class="text-sm font-bold leading-tight">Vourel Avin</div>
        <div class="text-xs font-mono text-acid tracking-wider uppercase">Portfolio</div>
      </div>
    </div>
    <RouterLink to="/contact" class="px-4 py-1.5 bg-acid text-ink rounded-lg font-mono text-xs font-bold tracking-wider uppercase active:scale-95 transition-transform">
      Hire me
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
</style>
