<template>
  <section class="event-head">
    <div>
      <div class="crumbs"><strong>{{ selectedEvent || 'Semua Event' }}</strong><span>•</span><span>{{ selectedDate }}</span><span>•</span><span>{{ selectedPlace }}</span></div>
      <h1>{{ title }}</h1>
    </div>
    <div class="actions">
      <select class="select" v-model="dashboardFilter.event"><option value="">Semua Event</option><option v-for="e in events" :key="e" :value="e">{{ e }}</option></select>
      <button class="btn btn-export" @click="$emit('export')">⭳ Ekspor CSV</button>
    </div>
  </section>
</template>
<script setup>
import { computed } from 'vue'
import guests from '../../data/guests.js'
import { dashboardFilter } from '../../data/filter.js'
defineProps({ title: { type: String, default: 'Statistik Check-in & Kehadiran' } })
const events = computed(() => [...new Set(guests.map(g => g.venue))].sort())
const selectedEvent = computed(() => dashboardFilter.event || dashboardFilter.cat.split(' - ').slice(-1)[0].trim() || '')
const eventMeta = { 'Ngamen 0.5': { date: '16 Agustus 2026', place: 'Outdoor Stage' }, 'Pestapora': { date: '16 Agustus 2026', place: 'Main Stage' }, 'Prambanan Jazz': { date: '16 Agustus 2026', place: 'Festival Stage' } }
const selectedDate = computed(() => eventMeta[selectedEvent.value]?.date || '16 Agustus 2026')
const selectedPlace = computed(() => eventMeta[selectedEvent.value]?.place || `${events.value.length} Venue`)
</script>
