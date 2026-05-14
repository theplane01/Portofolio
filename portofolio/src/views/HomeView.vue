<template>
  <!-- Desktop View -->
  <section v-if="!isMobile" class="pt-32 pb-0">
    <div class="min-h-screen bg-void grid grid-cols-2 gap-0 p-0">
      <!-- Left Content -->
      <div class="flex flex-col justify-end px-10 py-12 relative z-10">
        <span class="font-mono text-sm text-ember tracking-widest uppercase mb-4 animate-fade-up" style="animation-delay: 0.2s;">
          Designer × Developer × Experimenter
        </span>
        <h1 class="text-7xl font-bold leading-none text-chalk mb-2 animate-fade-up" style="animation-delay: 0.35s;">
          Vourel
          <em class="block font-serif italic text-glacier font-normal">Oktofit</em>
          <span class="text-acid">Avin.</span>
        </h1>
        <p class="text-lg text-silver leading-relaxed max-w-sm mt-8 mb-10 animate-fade-up" style="animation-delay: 0.5s;">
          I build interfaces that don't apologize for existing. Pixel precision meets chaotic creativity.
        </p>
        <div class="flex gap-4 flex-wrap animate-fade-up" style="animation-delay: 0.65s;">
          <button class="px-6 py-3 bg-acid text-ink font-mono text-xs font-bold tracking-widest uppercase interactive hover:shadow-lg hover:-translate-y-1 transition-all">
            View My Work
          </button>
          <button class="px-6 py-3 bg-transparent text-chalk border-2 border-white/25 font-mono text-xs font-bold tracking-widest uppercase interactive hover:border-acid hover:text-acid transition-all">
            Get In Touch
          </button>
        </div>
      </div>

      <!-- Right Visual -->
      <div class="relative overflow-hidden">
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-ember/35 to-transparent z-0"></div>
        
        <!-- Floating Blobs -->
        <div class="absolute w-96 h-96 bg-glacier opacity-15 rounded-full blur-3xl top-1/4 left-1/3 animate-float-orb"></div>
        <div class="absolute w-80 h-80 bg-ember opacity-20 rounded-full blur-3xl top-1/2 left-1/2 animate-float-orb" style="animation-delay: -3s;"></div>
        <div class="absolute w-56 h-56 bg-acid opacity-18 rounded-full blur-3xl bottom-0 right-0 animate-float-orb" style="animation-delay: -5s;"></div>
        
        <!-- Grid Overlay -->
        <div class="absolute inset-0 grid-bg"></div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="grid grid-cols-3 gap-px bg-dark-border">
      <div class="bg-panel p-8 text-center">
        <div class="text-4xl font-bold text-chalk mb-2">47<span class="text-acid">+</span></div>
        <div class="font-mono text-xs text-silver tracking-widest uppercase">Projects</div>
      </div>
      <div class="bg-panel p-8 text-center">
        <div class="text-4xl font-bold text-chalk mb-2">5<span class="text-acid">yr</span></div>
        <div class="font-mono text-xs text-silver tracking-widest uppercase">Experience</div>
      </div>
      <div class="bg-panel p-8 text-center">
        <div class="text-4xl font-bold text-chalk mb-2">12</div>
        <div class="font-mono text-xs text-silver tracking-widest uppercase">Experiments</div>
      </div>
    </div>

    <!-- Marquee Strip -->
    <div class="bg-ember py-3 overflow-hidden whitespace-nowrap">
      <div class="inline-flex animate-marquee">
        <span v-for="i in 12" :key="i" class="font-mono text-xs font-bold tracking-widest uppercase text-ink px-8">
          UI/UX <span class="text-ember/35 mx-1">✦</span> React <span class="text-ember/35 mx-1">✦</span> AI Builds <span class="text-ember/35 mx-1">✦</span> Motion <span class="text-ember/35 mx-1">✦</span> 3D Web <span class="text-ember/35 mx-1">✦</span> Branding
        </span>
      </div>
    </div>

    <!-- About Section -->
    <section class="bg-chalk text-ink py-20 px-10">
      <div class="grid grid-cols-2 gap-20 items-center">
        <!-- Left: Intro -->
        <div>
          <div class="font-mono text-sm text-ember tracking-widest uppercase mb-4 flex items-center gap-2">
            <span class="w-5 h-px bg-ember"></span>
            About me
          </div>
          <h2 class="text-5xl font-bold leading-tight mb-8">
            I make the <em class="font-serif italic text-ember font-normal">weird stuff</em> work.
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-4 max-w-lg">
            Designer-developer hybrid obsessed with the space where <strong>code becomes art</strong>. I build products that feel intentional — not because they follow rules, but because they know which ones to break.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed max-w-lg">
            Currently exploring <strong>AI-powered interfaces</strong>, generative aesthetics, and what happens when a designer learns to think like an engineer.
          </p>
          <div class="flex flex-wrap gap-2 mt-6">
            <span class="px-3 py-1.5 border-2 border-ink font-mono text-xs font-bold tracking-widest uppercase hover:bg-ink hover:text-chalk transition-all cursor-pointer">Figma</span>
            <span class="px-3 py-1.5 border-2 border-ink font-mono text-xs font-bold tracking-widest uppercase hover:bg-ink hover:text-chalk transition-all cursor-pointer">React</span>
            <span class="px-3 py-1.5 border-2 border-ink font-mono text-xs font-bold tracking-widest uppercase hover:bg-ink hover:text-chalk transition-all cursor-pointer">TypeScript</span>
            <span class="px-3 py-1.5 border-2 border-ink font-mono text-xs font-bold tracking-widest uppercase hover:bg-ink hover:text-chalk transition-all cursor-pointer">Three.js</span>
          </div>
        </div>

        <!-- Right: Decorative -->
        <div class="h-96 bg-ember rounded-2xl relative overflow-hidden flex items-center justify-center">
          <div class="text-9xl font-bold text-black/10">VOA</div>
          <div class="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent"></div>
        </div>
      </div>
    </section>
  </section>

  <!-- Mobile View -->
  <section v-else class="bg-void">
    <div class="px-5 py-8 relative">
      <!-- Hero Content -->
      <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-white/6 border border-white/12 rounded-full mb-5 animate-fade-up">
        <span class="w-1 h-1 bg-acid rounded-full animate-pulse"></span>
        <span class="font-mono text-xs font-bold text-acid tracking-widest uppercase">Available for work</span>
      </div>

      <h1 class="text-4xl font-bold leading-tight text-chalk mb-2 animate-fade-up" style="animation-delay: 0.2s;">
        Vourel
        <em class="block font-serif italic text-glacier font-normal">Oktofit</em>
        <span class="text-acid">Avin.</span>
      </h1>

      <p class="font-mono text-xs text-silver tracking-widest uppercase mt-3 mb-4 animate-fade-up" style="animation-delay: 0.35s;">
        Designer × Developer × Experimenter
      </p>

      <p class="text-sm leading-relaxed text-white/50 mb-6 animate-fade-up" style="animation-delay: 0.45s;">
        I build interfaces that don't apologize for existing. Pixel precision meets chaotic creativity.
      </p>

      <!-- Animated Background -->
      <div class="absolute inset-0 -z-10 overflow-hidden h-96">
        <div class="absolute w-64 h-64 bg-ember opacity-20 rounded-full blur-3xl top-0 -right-32 animate-float-orb"></div>
        <div class="absolute w-48 h-48 bg-acid opacity-12 rounded-full blur-3xl top-40 -left-24 animate-float-orb" style="animation-delay: -4s;"></div>
        <div class="absolute w-40 h-40 bg-glacier opacity-15 rounded-full blur-3xl bottom-0 right-10 animate-float-orb" style="animation-delay: -7s;"></div>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-3 gap-px bg-dark-border px-0 mx-0 -mx-5">
      <div class="bg-panel p-4 text-center">
        <div class="text-2xl font-bold text-chalk"><span id="c1">47</span><span class="text-acid">+</span></div>
        <div class="font-mono text-xs text-silver tracking-widest uppercase mt-1">Projects</div>
      </div>
      <div class="bg-panel p-4 text-center">
        <div class="text-2xl font-bold text-chalk"><span id="c2">5</span><span class="text-acid">yr</span></div>
        <div class="font-mono text-xs text-silver tracking-widest uppercase mt-1">Experience</div>
      </div>
      <div class="bg-panel p-4 text-center">
        <div class="text-2xl font-bold text-chalk">12</div>
        <div class="font-mono text-xs text-silver tracking-widest uppercase mt-1">Experiments</div>
      </div>
    </div>

    <!-- Marquee -->
    <div class="bg-ember py-3 mt-6 overflow-hidden whitespace-nowrap">
      <div class="inline-flex animate-marquee text-xs font-bold tracking-widest uppercase text-ink">
        <span class="px-6">UI/UX</span>
        <span class="text-black/35 mx-1">✦</span>
        <span class="px-6">React</span>
        <span class="text-black/35 mx-1">✦</span>
        <span class="px-6">AI Builds</span>
        <span class="text-black/35 mx-1">✦</span>
        <span class="px-6">Motion</span>
        <span class="text-black/35 mx-1">✦</span>
        <span class="px-6">3D Web</span>
        <span class="text-black/35 mx-1">✦</span>
        <span class="px-6">Branding</span>
      </div>
    </div>

    <!-- About Card -->
    <div class="px-5 py-7">
      <div class="flex items-center gap-2 mb-3">
        <span class="w-4 h-px bg-ember"></span>
        <span class="font-mono text-xs text-ember tracking-widest uppercase font-bold">About me</span>
      </div>
      <h2 class="text-2xl font-bold leading-tight mb-4">
        I make the<br>
        <em class="font-serif italic text-ember font-normal">weird stuff</em> work.
      </h2>
      <div class="bg-panel border border-dark-border rounded-2xl p-4 relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-ember to-acid"></div>
        <p class="text-sm leading-relaxed text-white/55 mb-3">
          Designer-developer hybrid obsessed with the space where <strong>code becomes art</strong>. I build products that feel intentional — not because they follow rules, but because they know which ones to break.
        </p>
        <p class="text-sm leading-relaxed text-white/55 mb-4">
          Currently exploring <strong>AI-powered interfaces</strong>, generative aesthetics, and what happens when a designer learns to think like an engineer.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="px-2 py-1 bg-white/6 border border-white/10 rounded font-mono text-xs text-white/60 uppercase tracking-wider">Figma</span>
          <span class="px-2 py-1 bg-white/6 border border-white/10 rounded font-mono text-xs text-white/60 uppercase tracking-wider">React</span>
          <span class="px-2 py-1 bg-white/6 border border-white/10 rounded font-mono text-xs text-white/60 uppercase tracking-wider">TypeScript</span>
          <span class="px-2 py-1 bg-white/6 border border-white/10 rounded font-mono text-xs text-white/60 uppercase tracking-wider">Three.js</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useDeviceDetection } from '@/utils/deviceDetect';

const device = useDeviceDetection();
const isMobile = ref(device.isMobile);

onMounted(() => {
  window.addEventListener('resize', () => {
    isMobile.value = device.isMobile;
  });
});
</script>

<style scoped>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.8s ease-out;
}
</style>