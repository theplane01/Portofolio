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
    <div class="bg-gradient-to-br from-[#0a0f1a] to-[#12101e] border border-acid/15 rounded-2xl p-6 mb-6 relative overflow-hidden reveal">
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-acid to-transparent"></div>
      <div class="inline-flex items-center gap-2 px-2 py-1.5 bg-acid/10 border border-acid/20 rounded-full mb-3">
        <span class="w-1 h-1 bg-acid rounded-full"></span>
        <span class="font-mono text-xs font-bold text-acid tracking-widest uppercase">Live</span>
      </div>
      <h2 class="text-2xl font-bold text-chalk mb-2">AI Assistant Terminal</h2>
      <p class="text-sm text-white/42">An experimental conversational interface powered by Claude AI. Ask about my work, vision, or design philosophy.</p>
    </div>

    <!-- Terminal Chat -->
    <div class="bg-black/50 border border-acid/12 rounded-xl overflow-hidden mb-6 reveal flex flex-col">
      <div class="bg-white/4 border-b border-white/6 px-4 py-3 flex items-center gap-2">
        <span class="w-2 h-2 bg-[#ff5f57] rounded-full"></span>
        <span class="w-2 h-2 bg-[#febc2e] rounded-full"></span>
        <span class="w-2 h-2 bg-[#28c840] rounded-full"></span>
        <span class="font-mono text-xs text-white/25 ml-2">terminal.ai</span>
      </div>
      
      <!-- Messages Container -->
      <div class="flex-1 overflow-y-auto max-h-96 p-4 font-mono text-xs leading-relaxed space-y-3" ref="messagesContainer">
        <div v-for="(msg, idx) in messages" :key="idx" :class="[
          'animate-fade-up',
          msg.role === 'user' ? 'text-acid' : 'text-white/70'
        ]">
          <div v-if="msg.role === 'user'" class="text-white/25">
            $ {{ msg.content }}
          </div>
          <div v-else class="whitespace-pre-wrap text-white/70">
            {{ msg.content }}
          </div>
        </div>
        
        <!-- Loading state -->
        <div v-if="loading" class="text-white/50 animate-pulse">
          <span class="inline-block w-1.5 h-3 bg-acid animate-blink"></span>
        </div>
        
        <!-- Prompt when no messages -->
        <div v-if="messages.length === 0" class="text-white/50">
          $ <span class="inline-block w-1.5 h-3 bg-acid ml-1 animate-blink"></span>
        </div>
      </div>

      <!-- Input Form -->
      <div class="border-t border-white/6 p-4 bg-white/2">
        <form @submit.prevent="sendMessage" class="flex gap-2">
          <span class="text-white/25">$</span>
          <input
            v-model="userInput"
            type="text"
            placeholder="Ask about my work, skills, or vision..."
            class="flex-1 bg-transparent text-acid outline-none placeholder-white/20 font-mono text-xs"
            :disabled="loading"
            @keydown.enter="sendMessage"
          />
          <button
            type="submit"
            :disabled="loading || !userInput.trim()"
            class="text-white/25 hover:text-acid transition-colors disabled:opacity-50"
          >
            →
          </button>
        </form>
      </div>
    </div>

    <!-- Active Builds -->
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
import { onMounted, ref, nextTick } from 'vue';

const messages = ref([
  {
    role: 'assistant',
    content: `Welcome to Void AI Terminal. I'm Vourel's AI assistant powered by Groq.

I can help you learn about:
• My work and projects (UI/UX, web development, AI integration)
• My skills and tools (React, TypeScript, Three.js, Figma)
• My philosophy on design and creativity

Try asking: "What's your latest project?" or "Tell me about your AI experiments"`
  }
]);
const userInput = ref('');
const loading = ref(false);
const messagesContainer = ref(null);

const sendMessage = async () => {
  if (!userInput.value.trim() || loading.value) return;

  const userMessage = userInput.value.trim();
  messages.value.push({
    role: 'user',
    content: userMessage
  });
  userInput.value = '';
  loading.value = true;

  await nextTick();
  scrollToBottom();

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: messages.value
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    messages.value.push({
      role: 'assistant',
      content: data.content
    });
  } catch (error) {
    messages.value.push({
      role: 'assistant',
      content: `Error: ${error.message}\n\nMake sure GROQ_API_KEY is set in your Vercel environment variables.`
    });
  } finally {
    loading.value = false;
    await nextTick();
    scrollToBottom();
  }
};

const scrollToBottom = () => {
  setTimeout(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  }, 0);
};

const experiments = [
  {
    id: 1,
    icon: '🤖',
    title: 'AI-Powered UI Components',
    status: 'Live',
    statusClass: 'bg-acid/10 text-acid border border-acid/20',
    desc: 'Building a library of UI components that adapt and respond to user behavior using Claude API.',
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

<style scoped>
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-blink {
  animation: blink 1s step-start infinite;
}
</style>
