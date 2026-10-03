<template>
  <section class="card">
    <div class="toolbar">
      <div class="toolbar-title"><h2>Data Pemesan</h2><p>{{ filtered.length }} pemesan NGAMEN 0.5</p></div>
      <div class="filters">
        <label class="page-size">Tampilkan
          <select class="select" v-model.number="pager.perPage" @change="pager.page = 1">
            <option :value="5">5</option><option :value="10">10</option><option :value="20">20</option><option :value="50">50</option>
          </select>
          entri per halaman
        </label>
        <label class="search"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg><input v-model="q" placeholder="Cari pemesan, tiket, nama..."/></label>
        <select class="select" v-model="cat"><option value="">Semua Kategori</option><option v-for="o in options" :key="o" :value="o">{{ o }}</option></select>
      </div>
    </div>
    <CheckinTable :rows="filtered" tab="all" />
  </section>
</template>
<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'
import guests from '../data/guests.js'
import CheckinTable from '../components/checkin/CheckinTable.vue'
import { pager } from '../data/pagination.js'
import { dashboardFilter } from '../data/filter.js'
const q = ref(''), cat = ref('')
watch(cat, v => { dashboardFilter.cat = v }, { immediate: true })
onUnmounted(() => { dashboardFilter.cat = '' })
const options = computed(() => [...new Set(guests.filter(g => !dashboardFilter.event || g.venue === dashboardFilter.event).map(g => `${g.cat} - ${g.venue}`))].sort())
const filtered = computed(() => guests.filter(g => {
  if (cat.value && `${g.cat} - ${g.venue}` !== cat.value) return false
  if (!cat.value && dashboardFilter.event && g.venue !== dashboardFilter.event) return false
  if (q.value && !(g.name + g.email + g.id + g.phone).toLowerCase().includes(q.value.toLowerCase())) return false
  return true
}))
</script>
