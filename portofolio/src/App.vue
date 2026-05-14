<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useDeviceDetection } from '@/utils/deviceDetect';
import DesktopLayout from '@/components/Desktop/DesktopLayout.vue';
import MobileLayout from '@/components/Mobile/MobileLayout.vue';

const device = useDeviceDetection();
const isMobile = ref(device.isMobile);

function handleResize() {
  isMobile.value = device.isMobile;
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  window.addEventListener('orientationchange', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('orientationchange', handleResize);
});
</script>

<template>
  <DesktopLayout v-if="!isMobile" />
  <MobileLayout v-else />
</template>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>

