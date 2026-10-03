<template>
  <section class="card">
    <CheckinToolbar :tab="tab" :q="q" :cat="cat" @update:tab="tab=$event" @update:q="q=$event" @update:cat="cat=$event" />
    <CheckinTable :rows="filtered" :tab="tab" />
  </section>
</template>
<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'
import guests from '../data/guests.js'
import CheckinToolbar from '../components/checkin/CheckinToolbar.vue'
import CheckinTable from '../components/checkin/CheckinTable.vue'
import { dashboardFilter } from '../data/filter.js'
const tab = ref('all'), q = ref(''), cat = ref('')
watch(cat, v => { dashboardFilter.cat = v }, { immediate: true })
onUnmounted(() => { dashboardFilter.cat = '' })
const filtered = computed(() => guests.filter(g => {
  if (cat.value && `${g.cat} - ${g.venue}` !== cat.value) return false
  if (!cat.value && dashboardFilter.event && g.venue !== dashboardFilter.event) return false
  if (q.value && !(g.name + g.email + g.id + g.phone).toLowerCase().includes(q.value.toLowerCase())) return false
  return true
}))
</script>
