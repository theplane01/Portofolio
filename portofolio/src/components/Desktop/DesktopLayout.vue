<template>
  <div class="min-h-screen bg-chalk text-ink font-display hide-scrollbar">
    <!-- Desktop Cursor -->
    <div id="cursor" class="hidden md:block"></div>
    <div id="cursor-ring" class="hidden md:block"></div>
    
    <DesktopNav />
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import DesktopNav from './DesktopNav.vue';

onMounted(() => {
  // Custom cursor tracking
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');
  
  if (!cursor || !cursorRing) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';

    // Smooth ring follow
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursorRing.style.left = cursorX + 'px';
    cursorRing.style.top = cursorY + 'px';
  });

  // Hover effects
  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('interactive')) {
      cursor.classList.add('big');
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target;
    if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('interactive')) {
      cursor.classList.remove('big');
    }
  });

  // Hide default cursor
  document.body.style.cursor = 'none';
});

onUnmounted(() => {
  document.body.style.cursor = 'auto';
});
</script>

<style scoped>
</style>
