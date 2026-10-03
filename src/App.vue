<template>
  <div class="app" :class="{ 'is-scan': isScanPage }">
    <TopBar />
    <main class="container main" :class="{ 'is-scrolled': scrolled, 'scan-mode': isScanPage }">
      <EventHeader v-if="!isScanPage" />
      <KpiCards v-if="!isScanPage" />
      <router-view />
    </main>
    <BottomBar />
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import TopBar from './components/layout/TopBar.vue'
import BottomBar from './components/layout/BottomBar.vue'
import EventHeader from './components/layout/EventHeader.vue'
import KpiCards from './components/layout/KpiCards.vue'
const route = useRoute()
const isScanPage = computed(() => route.path === '/checkin' || route.path === '/invitation')
const scrolled = ref(false)
function onScroll() { scrolled.value = window.scrollY > 24 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
