<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const open = ref(false)
watch(open, v => { document.body.classList.toggle('sidebar-open', v) })
watch(() => route.path, () => { open.value = false })
onUnmounted(() => { document.body.classList.remove('sidebar-open') })
const apiUrl = import.meta.env.VITE_API_URL
const creatorId = import.meta.env.VITE_CREATOR_ID || '12'
const logoUrl = `${apiUrl}/logo/kolektix-creator-blue.png`
const creatorName = ref('')
const creatorImage = ref('')
const initials = computed(() => creatorName.value.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'KC')
onMounted(async () => {
  try {
    const r = await fetch(`${apiUrl}/api/creator/${creatorId}`, { headers: { Accept: 'application/json' } })
    const j = await r.json()
    const d = j.data || {}
    creatorName.value = d.name_event_organizer || d.name || d.has_user?.name || ''
    creatorImage.value = d.image_url || ''
  } catch {}
})
</script>
<template>
  <header class="topbar">
    <div class="container topbar-inner">
      <div class="brand-left">
        <button class="burger" @click="open = !open" aria-label="Menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 7h16"/><path d="M4 12h10"/><path d="M4 17h16"/></svg></button>
        <router-link to="/dashboard" class="brand">
          <img :src="logoUrl" alt="kolektix" class="brand-logo" />
        </router-link>
      </div>
      <nav class="nav">
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/pemesan">Pemesan</router-link>
        <router-link to="/checkin">Check-In</router-link>
        <router-link to="/invitation">Invitation</router-link>
      </nav>
      <div class="topbar-right">
        <div class="user"><img v-if="creatorImage" :src="creatorImage" :alt="creatorName" class="avatar-img" /><span v-else class="avatar">{{ initials }}</span><span class="user-name">{{ creatorName }}</span></div>
      </div>
    </div>
    <div class="scrim" v-if="open" @click="open = false"></div>
    <aside class="sidebar" :class="{ open }">
      <div class="sidebar-head">
        <router-link to="/dashboard" class="brand"><img :src="logoUrl" alt="kolektix" class="brand-logo" /></router-link>
        <button class="icon-btn" @click="open = false" aria-label="Tutup">✕</button>
      </div>
      <nav class="sidebar-nav">
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/pemesan">Pemesan</router-link>
        <router-link to="/checkin">Check-In</router-link>
        <router-link to="/invitation">Invitation</router-link>
      </nav>
    </aside>
  </header>
</template>
