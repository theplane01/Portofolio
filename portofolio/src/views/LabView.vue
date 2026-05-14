<template>
  <section class="bg-void py-12 px-6">
    <div class="mb-6">
      <div class="flex items-center gap-2 mb-3">
        <span class="w-4 h-px bg-ember"></span>
        <span class="font-mono text-xs text-acid tracking-widest uppercase font-bold">Experiment zone</span>
      </div>
      <h1 class="text-3xl font-bold text-chalk leading-tight mb-2">The Lab.</h1>
    </div>

    <!-- Lab Hero -->
    <div class="bg-gradient-to-br from-acid/8 to-ember/5 border border-acid/20 rounded-2xl p-8 mb-8 relative overflow-hidden reveal">
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acid to-transparent opacity-50"></div>
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-acid/5 rounded-full blur-3xl"></div>
      <div class="relative z-10">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-acid/10 border border-acid/30 rounded-full mb-4">
          <span class="w-1.5 h-1.5 bg-acid rounded-full animate-pulse"></span>
          <span class="font-mono text-xs font-bold text-acid tracking-widest uppercase">Lab active</span>
        </div>
        <h2 class="text-2xl font-bold text-chalk mb-3">Where creativity meets code.</h2>
        <p class="text-sm text-white/60 max-w-2xl leading-relaxed">
          A playground for experimental ideas. Building interactive prototypes, generative systems, and pushing the boundaries of what's possible on the web.
        </p>
      </div>
    </div>
    <div>
      <div class="flex items-center gap-2 mb-4">
        <span class="w-4 h-px bg-ember"></span>
        <span class="font-mono text-xs text-ember tracking-widest uppercase font-bold">Active builds</span>
      </div>

      <div class="space-y-3 reveal">
        <div 
          v-for="experiment in experiments" 
          :key="experiment.id"
          class="bg-panel border border-dark-border rounded-2xl p-4 flex gap-3 active:scale-95 transition-transform"
        >
          <div class="w-11 h-11 bg-white/5 border border-dark-border rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
            {{ experiment.icon }}
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-bold text-sm text-chalk">{{ experiment.title }}</h3>
              <span 
                class="font-mono text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                :class="experiment.statusClass"
              >
                {{ experiment.status }}
              </span>
            </div>
            <p class="text-xs text-white/38 leading-relaxed">{{ experiment.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

const experiments = [
  {
    id: 1,
    icon: '🤖',
    title: 'AI-Powered UI Components',
    status: 'Live',
    statusClass: 'bg-acid/10 text-acid border border-acid/20',
    desc: 'Building a library of UI components that adapt and respond to user behavior using advanced APIs.',
  },
  {
    id: 2,
    icon: '🎨',
    title: 'Generative Design System',
    status: 'WIP',
    statusClass: 'bg-ember/10 text-ember border border-ember/20',
    desc: 'Exploring procedural generation of design tokens and component variations.',
  },
  {
    id: 3,
    icon: '🌌',
    title: '3D Web Experiments',
    status: 'Live',
    statusClass: 'bg-acid/10 text-acid border border-acid/20',
    desc: 'Interactive 3D environments using Three.js and WebGL. Physics-based interactions.',
  },
  {
    id: 4,
    icon: '📊',
    title: 'Data Visualization Lab',
    status: 'Concept',
    statusClass: 'bg-white/5 text-silver border border-dark-border',
    desc: 'Novel approaches to data visualization and real-time analytics dashboards.',
  },
  {
    id: 5,
    icon: '✨',
    title: 'Motion Library',
    status: 'Live',
    statusClass: 'bg-acid/10 text-acid border border-acid/20',
    desc: 'Curated collection of micro-interactions and animation primitives in GSAP.',
  },
];

onMounted(() => {
  // Trigger animations
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add('vis');
    }, idx * 100);
  });
});
</script>

