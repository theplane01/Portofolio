<template>
  <!-- Desktop Version -->
  <section v-if="!isMobile" class="bg-chalk text-ink py-24 px-10 min-h-screen flex items-center">
    <div class="max-w-3xl">
      <div class="font-mono text-sm text-ember tracking-widest uppercase mb-6 flex items-center gap-2">
        <span class="w-5 h-px bg-ember"></span>
        Get in touch
      </div>
      <h1 class="text-6xl font-bold leading-tight mb-6">Let's work <em class="font-serif italic font-normal">together</em>.</h1>
      <p class="text-lg text-gray-600 mb-12 max-w-xl leading-relaxed">
        I'm always looking for exciting projects and collaborations. Whether you have a design challenge, want to build something innovative, or just want to chat about creative work — I'm here for it.
      </p>
      
      <div class="space-y-4">
        <a href="mailto:oktofitavinvourel@gmail.com" class="flex items-center justify-between p-6 bg-void text-chalk border border-white/10 rounded-2xl hover:border-acid hover:bg-opacity-50 transition-all group">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-ember/20 rounded-lg flex items-center justify-center text-lg">📧</div>
            <div>
              <div class="font-bold">Email</div>
              <div class="font-mono text-xs text-silver">oktofitavinvourel@gmail.com</div>
            </div>
          </div>
          <span class="text-lg opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
        </a>

        <a href="https://github.com/theplane01" target="_blank" class="flex items-center justify-between p-6 bg-void text-chalk border border-white/10 rounded-2xl hover:border-acid hover:bg-opacity-50 transition-all group">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-lg">🔗</div>
            <div>
              <div class="font-bold">GitHub</div>
              <div class="font-mono text-xs text-silver">github.com/theplane01</div>
            </div>
          </div>
          <span class="text-lg opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
        </a>

        <a href="https://www.linkedin.com/in/vourel-oktofit-729b96337" target="_blank" class="flex items-center justify-between p-6 bg-void text-chalk border border-white/10 rounded-2xl hover:border-acid hover:bg-opacity-50 transition-all group">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-glacier/20 rounded-lg flex items-center justify-center text-lg">💼</div>
            <div>
              <div class="font-bold">LinkedIn</div>
              <div class="font-mono text-xs text-silver">linkedin.com/in/vourel-oktofit-729b96337</div>
            </div>
          </div>
          <span class="text-lg opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Mobile Version -->
  <section v-else class="bg-void py-6 px-5">
    <div class="bg-acid rounded-3xl p-8 mb-6 relative overflow-hidden">
      <div class="absolute -bottom-8 -right-4 text-9xl font-bold text-black/7">HI</div>
      <div class="relative z-10">
        <h1 class="text-3xl font-bold text-ink mb-3 leading-tight">
          Let's work <em class="font-serif italic font-normal">together</em>.
        </h1>
        <p class="text-base leading-relaxed text-black/50">
          I'm always looking for exciting projects and collaborations.
        </p>
      </div>
    </div>

    <div class="space-y-3">
      <a href="mailto:oktofitavinvourel@gmail.com" class="flex items-center justify-between p-4 bg-panel border border-dark-border rounded-2xl active:scale-95 transition-transform">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 bg-ember/20 rounded-lg flex items-center justify-center text-lg flex-shrink-0">📧</div>
          <div>
            <div class="font-bold text-sm text-chalk">Email</div>
            <div class="font-mono text-xs text-silver">oktofitavinvourel@gmail.com</div>
          </div>
        </div>
        <span class="text-lg text-white/20">→</span>
      </a>

      <a href="https://github.com/theplane01" target="_blank" class="flex items-center justify-between p-4 bg-panel border border-dark-border rounded-2xl active:scale-95 transition-transform">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-lg flex-shrink-0">🔗</div>
          <div>
            <div class="font-bold text-sm text-chalk">GitHub</div>
            <div class="font-mono text-xs text-silver">github.com/theplane01</div>
          </div>
        </div>
        <span class="text-lg text-white/20">→</span>
      </a>

      <a href="https://www.linkedin.com/in/vourel-oktofit-729b96337" target="_blank" class="flex items-center justify-between p-4 bg-panel border border-dark-border rounded-2xl active:scale-95 transition-transform">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 bg-glacier/20 rounded-lg flex items-center justify-center text-lg flex-shrink-0">💼</div>
          <div>
            <div class="font-bold text-sm text-chalk">LinkedIn</div>
            <div class="font-mono text-xs text-silver">linkedin.com/in/vourel-oktofit-729b96337</div>
          </div>
        </div>
        <span class="text-lg text-white/20">→</span>
      </a>
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