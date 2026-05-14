<template>
  <div class="fixed top-0 left-0 right-0 z-50 h-7 bg-ink flex items-center justify-between px-5 text-chalk text-xs font-mono font-bold">
    <span class="tracking-wider">{{ currentTime }}</span>
    <div class="flex gap-1 items-center text-xs">
      <span>▲▲▲</span>
      <span>WiFi</span>
      <span>🔋</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentTime = ref('9:41');

function updateTime() {
  const now = new Date();
  currentTime.value = 
    now.getHours().toString().padStart(2, '0') + ':' + 
    now.getMinutes().toString().padStart(2, '0');
}

onMounted(() => {
  updateTime();
  const interval = setInterval(updateTime, 10000);
  onUnmounted(() => clearInterval(interval));
});
</script>

<style scoped>
</style>
