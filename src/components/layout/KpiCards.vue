<template>
  <section class="kpis">
    <div class="kpi" v-for="k in kpis" :key="k.label">
      <div class="kpi-top"><span>{{ k.label }}</span><span class="chip" :class="k.chipClass">{{ k.chip }}</span></div>
      <div><div class="kpi-value num" v-html="k.value"></div><p class="kpi-sub">{{ k.sub }}</p></div>
    </div>
  </section>
</template>
<script setup>
import { computed } from 'vue'
import guests from '../../data/guests.js'
import { dashboardFilter } from '../../data/filter.js'
const catVenue = computed(() => dashboardFilter.cat ? dashboardFilter.cat.split(' - ').slice(-1)[0].trim() : '')
const venue = computed(() => catVenue.value || dashboardFilter.event)
const inScope = g => {
  if (dashboardFilter.cat && `${g.cat} - ${g.venue}` !== dashboardFilter.cat) return false
  if (!dashboardFilter.cat && dashboardFilter.event && g.venue !== dashboardFilter.event) return false
  return true
}
const rows = computed(() => guests.filter(inScope))
const sold = computed(() => rows.value.length)
const checked = computed(() => rows.value.filter(g => g.status === 'Checked-In').length)
const fmt = n => n.toLocaleString('id-ID')
const pct = (a, b) => b ? `${((a / b) * 100).toFixed(1).replace('.', ',')}%` : '0%'
const ticketSub = computed(() => !venue.value ? 'Keseluruhan Tiket Terjual' : `Tiket Terjual di ${venue.value}`)
const inviteSub = computed(() => !venue.value ? 'Keseluruhan Tamu Undangan' : `Tamu Undangan di ${venue.value}`)
const invites = computed(() => rows.value.filter(g => g.cat === 'VIP Pass').length)
const invitesIn = computed(() => rows.value.filter(g => g.cat === 'VIP Pass' && g.status === 'Checked-In').length)
const kpis = computed(() => [
  { label: 'Total Penjualan', chip: '+12.4%', chipClass: 'chip-green', value: 'Rp 206.828.000', sub: venue.value ? `Penjualan di ${venue.value}` : 'Keseluruhan penjualan' },
  { label: 'Tiket Terjual', chip: `Sisa ${Math.max(0, 1500 - sold.value)}`, chipClass: 'chip-amber', value: `${fmt(sold.value)} <small>/ 1,500</small>`, sub: ticketSub.value },
  { label: 'Tamu Undangan', chip: `${fmt(invitesIn.value)} Hadir`, chipClass: 'chip-slate', value: fmt(invites.value), sub: inviteSub.value },
  { label: 'Sudah Check-in', chip: pct(checked.value, sold.value), chipClass: 'chip-green', value: `${fmt(checked.value)} <small>/ ${fmt(sold.value)}</small>`, sub: venue.value ? `Tamu sudah berada di ${venue.value}` : 'Tamu sudah berada di venue' },
])
</script>
