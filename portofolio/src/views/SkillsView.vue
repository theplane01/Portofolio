<template>
  <section class="bg-void py-12 px-6">
    <div class="mb-8">
      <div class="flex items-center gap-2 mb-3">
        <span class="w-4 h-px bg-ember"></span>
        <span class="font-mono text-xs text-ember tracking-widest uppercase font-bold">Capabilities</span>
      </div>
      <h1 class="text-4xl font-bold text-chalk leading-tight">What I bring.</h1>
    </div>

    <div class="space-y-8">
      <div v-for="category in skillCategories" :key="category.name" class="reveal">
        <div class="flex items-center justify-between mb-4">
          <span class="font-mono text-xs text-silver tracking-widest uppercase font-bold">{{ category.name }}</span>
          <span class="font-mono text-xs text-ember">{{ category.count }} skills</span>
        </div>
        
        <div class="space-y-5">
          <div v-for="skill in category.skills" :key="skill.name">
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-sm font-bold text-chalk">{{ skill.name }}</span>
              <span class="font-mono text-xs text-acid">{{ skill.level }}%</span>
            </div>
            <div class="h-1 bg-white/5 rounded-full overflow-hidden">
              <div 
                class="h-full rounded-full transition-all duration-1000 ease-out"
                :class="skill.class"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tools Grid -->
      <div class="mt-12">
        <div class="flex items-center justify-between mb-4">
          <span class="font-mono text-xs text-silver tracking-widest uppercase font-bold">Tools</span>
          <span class="font-mono text-xs text-ember">12 tools</span>
        </div>
        <div class="grid grid-cols-4 gap-3">
          <div v-for="tool in tools" :key="tool" class="bg-panel border border-dark-border rounded-xl p-3 text-center active:scale-90 transition-transform">
            <div class="text-xl mb-2">🛠</div>
            <div class="font-mono text-xs text-white/45 uppercase tracking-wider">{{ tool }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

const skillCategories = [
  {
    name: 'Design',
    count: 4,
    skills: [
      { name: 'UI / UX Design', level: 95, class: 'bg-gradient-to-r from-ember to-[#ff8c6e]' },
      { name: 'Motion Design', level: 85, class: 'bg-gradient-to-r from-ember to-[#ff8c6e]' },
      { name: 'Brand Systems', level: 80, class: 'bg-gradient-to-r from-ember to-[#ff8c6e]' },
      { name: 'Prototyping', level: 92, class: 'bg-gradient-to-r from-ember to-[#ff8c6e]' },
    ],
  },
  {
    name: 'Development',
    count: 5,
    skills: [
      { name: 'React / Next.js', level: 88, class: 'bg-gradient-to-r from-glacier to-[#b8e8ff]' },
      { name: 'TypeScript', level: 82, class: 'bg-gradient-to-r from-glacier to-[#b8e8ff]' },
      { name: 'CSS / GSAP', level: 90, class: 'bg-gradient-to-r from-glacier to-[#b8e8ff]' },
      { name: 'Three.js / WebGL', level: 65, class: 'bg-gradient-to-r from-glacier to-[#b8e8ff]' },
      { name: 'Node / Backend', level: 72, class: 'bg-gradient-to-r from-glacier to-[#b8e8ff]' },
    ],
  },
  {
    name: 'AI & Emerging',
    count: 3,
    skills: [
      { name: 'LLM Integration', level: 80, class: 'bg-gradient-to-r from-acid to-[#e8ff80]' },
      { name: 'Prompt Engineering', level: 78, class: 'bg-gradient-to-r from-acid to-[#e8ff80]' },
      { name: 'Generative AI', level: 75, class: 'bg-gradient-to-r from-acid to-[#e8ff80]' },
    ],
  },
];

const tools = ['Figma', 'VS Code', 'Claude', 'GitHub', 'Vercel', 'Supabase', 'Three.js', 'GSAP', 'React', 'Next.js', 'TypeScript', 'Tailwind'];

onMounted(() => {
  // Trigger animation
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add('vis');
    }, idx * 100);
  });
});
</script>
