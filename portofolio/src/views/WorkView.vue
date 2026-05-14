<template>
  <!-- Desktop Version -->
  <section v-if="!isMobile" class="bg-void py-24 px-10 min-h-screen">
    <div class="mb-12">
      <div class="font-mono text-sm text-ember tracking-widest uppercase mb-4 flex items-center gap-2">
        <span class="w-5 h-px bg-ember"></span>
        Selected projects
      </div>
      <h1 class="text-6xl font-bold text-chalk leading-tight">
        My <em class="font-serif italic font-normal text-ember">Work</em>.
      </h1>
    </div>

    <div class="grid grid-cols-3 gap-px bg-dark-border mb-8">
      <button 
        v-for="filter in filters" 
        :key="filter"
        @click="activeFilter = filter"
        :class="[
          'px-4 py-3 font-mono text-xs font-bold tracking-widest uppercase transition-all',
          activeFilter === filter 
            ? 'bg-acid text-ink border-acid' 
            : 'bg-panel text-silver border-dark-border hover:border-acid'
        ]"
      >
        {{ filter }}
      </button>
    </div>

    <div class="grid grid-cols-3 gap-px bg-dark-border rounded-2xl overflow-hidden">
      <div 
        v-for="(project, idx) in filteredProjects" 
        :key="idx"
        :class="[
          'bg-panel p-8 min-h-80 flex flex-col justify-end relative overflow-hidden group cursor-pointer hover:bg-opacity-80 transition-all',
          idx === 0 ? 'col-span-2 min-h-96' : '',
          idx === 3 ? 'col-span-2' : '',
        ]"
      >
        <div :class="['absolute top-0 left-0 bottom-0 w-1', project.accent]"></div>
        <p class="font-mono text-xs text-acid tracking-widest uppercase mb-2">{{ project.category }}</p>
        <h3 class="text-2xl font-bold text-chalk mb-3 leading-tight">{{ project.title }}</h3>
        <p class="text-silver text-sm mb-4 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity">{{ project.desc }}</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in project.tech" :key="tech" class="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-white/40 uppercase tracking-wider">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- Mobile Version -->
  <section v-else class="bg-void py-6 px-5">
    <div class="mb-6">
      <div class="flex items-center gap-2 mb-3">
        <span class="w-4 h-px bg-ember"></span>
        <span class="font-mono text-xs text-ember tracking-widest uppercase font-bold">Selected projects</span>
      </div>
      <h1 class="text-3xl font-bold text-chalk leading-tight">
        My <em class="font-serif italic font-normal text-ember">Work</em>.
      </h1>
    </div>

    <div class="flex gap-2 mb-6 overflow-x-auto pb-2">
      <button 
        v-for="filter in filters" 
        :key="filter"
        @click="activeFilter = filter"
        :class="[
          'flex-shrink-0 px-3 py-2 font-mono text-xs font-bold tracking-widest uppercase rounded-full transition-all',
          activeFilter === filter 
            ? 'bg-acid text-ink' 
            : 'bg-panel text-silver border border-dark-border'
        ]"
      >
        {{ filter }}
      </button>
    </div>

    <div class="space-y-px bg-dark-border rounded-2xl overflow-hidden">
      <div 
        v-for="(project, idx) in filteredProjects" 
        :key="idx"
        class="bg-panel p-4 relative border-l-3 active:scale-95 transition-transform"
        :class="project.accent"
      >
        <p class="font-mono text-xs text-acid tracking-widest uppercase mb-2">{{ project.category }}</p>
        <h3 class="text-lg font-bold text-chalk mb-2 leading-tight">{{ project.title }}</h3>
        <p class="text-sm text-white/40 mb-3 leading-relaxed">{{ project.desc }}</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in project.tech" :key="tech" class="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs font-mono text-white/40 uppercase tracking-wider">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDeviceDetection } from '@/utils/deviceDetect';

const device = useDeviceDetection();
const isMobile = ref(device.isMobile);
const activeFilter = ref('all');

const projects = [
  {
    category: 'Product Design × Dev',
    title: 'Neura — AI Dashboard',
    desc: 'Real-time intelligence dashboard that adapts layout based on user behavior.',
    tech: ['React', 'D3.js', 'AI', 'Design System'],
    filters: ['all', 'ai', 'dev'],
    accent: 'border-l-glacier',
  },
  {
    category: 'Brand + Motion',
    title: 'Solaris — Brand System',
    desc: 'Full visual identity with a living component library.',
    tech: ['Figma', 'Motion', 'Tokens'],
    filters: ['all', 'design'],
    accent: 'border-l-ember',
  },
  {
    category: 'Creative Coding',
    title: 'Terrain Generator',
    desc: 'Procedural landscape generation using WebGL shaders.',
    tech: ['WebGL', 'GLSL', 'Three.js'],
    filters: ['all', '3d', 'dev'],
    accent: 'border-l-acid',
  },
  {
    category: 'Full Stack × AI',
    title: 'Echoes — Memory App',
    desc: 'Personal knowledge tool using LLMs to surface connections.',
    tech: ['Next.js', 'LLM', 'Supabase'],
    filters: ['all', 'ai', 'dev'],
    accent: 'border-l-[#b87fff]',
  },
  {
    category: '3D + UX',
    title: 'Spatial Portfolio',
    desc: 'Experimental Three.js portfolio with physics-based interactions.',
    tech: ['Three.js', 'Cannon.js', 'GSAP'],
    filters: ['all', '3d', 'design'],
    accent: 'border-l-[#ff9b4d]',
  },
];

const filters = ['All', 'Design', 'Dev', 'AI', '3D'];

const filteredProjects = computed(() => {
  const filter = activeFilter.value.toLowerCase();
  if (filter === 'all') return projects;
  return projects.filter(p => p.filters.includes(filter));
});

onMounted(() => {
  window.addEventListener('resize', () => {
    isMobile.value = device.isMobile;
  });
});
</script>
