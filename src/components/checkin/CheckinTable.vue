<template>
  <div class="table-wrap">
    <table><thead><tr><th style="width:3rem">No</th><th>Transaksi</th><th>Seat No</th><th>{{ tab === 'invite' ? 'Media Partner' : 'Pengunjung' }}</th><th>Phone Number</th><th>Kategori</th><th>Status</th><th>Waktu Check-in</th><th style="text-align:right">Aksi</th></tr></thead>
    <tbody><tr v-for="(g, i) in paged" :key="g.id">
      <td class="num row-no">{{ start + i + 1 }}</td>
      <td class="num">{{ g.id }}</td>
      <td class="num">{{ g.seat }}</td>
      <td><div class="guest-name">{{ tab === 'invite' ? (g.media || g.name) : g.name }}</div><div class="guest-mail">{{ g.email }}</div></td>
      <td class="num">{{ g.phone }}</td>
      <td><div :class="catClass(displayCat(g.cat))">{{ displayCat(g.cat) }}</div><div class="guest-mail">{{ g.venue }}</div></td>
      <td><span :class="['status', g.status === 'Checked-In' ? 'status-in' : 'status-pend']">{{ g.status }}</span></td>
      <td class="num">{{ g.date }}<br/>{{ g.time }}</td>
      <td style="text-align:right"><button class="icon-btn" :title="'Download e-ticket ' + g.id" @click="download(g)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11m0 0 3.5-3.5M12 15 8.5 11.5"/><path d="M5 19h14"/></svg></button></td>
    </tr></tbody></table>
    <div v-if="!rows.length" class="empty">Tidak ada data cocok.</div>
    <div v-else class="table-foot">Menampilkan {{ start + 1 }} - {{ start + paged.length }} dari {{ totalLabel }} entri</div>
  </div>
</template>
<script setup>
import { computed, watch } from 'vue'
import { pager } from '../../data/pagination.js'
const props = defineProps({ rows: Array, tab: { type: String, default: 'all' } })
const catClass = c => c==='VIP Pass' ? 'cat-vip' : c==='Presale 2' ? 'cat-pre' : c==='Early Bird' ? 'cat-early' : 'cat-reg'
const displayCat = c => props.tab === 'invite' ? 'Invitation' : c
const total = computed(() => (props.rows || []).length)
const totalLabel = computed(() => total.value.toLocaleString('id-ID'))
const start = computed(() => (pager.page - 1) * pager.perPage)
const paged = computed(() => (props.rows || []).slice(start.value, start.value + pager.perPage))
watch([() => total.value, () => pager.perPage], () => { pager.total = Math.max(1, Math.ceil(total.value / pager.perPage)); if (pager.page > pager.total) pager.page = pager.total; if (pager.page < 1) pager.page = 1 }, { immediate: true })
watch(() => total.value, () => { pager.page = 1 })
function download(g) {
  const text = `E-TICKET NGAMEN 0.5\nTransaksi: ${g.id}\nNama: ${g.name}\nKategori: ${displayCat(g.cat)}\nSeat: ${g.seat}\nStatus: ${g.status}`
  const blob = new Blob([text], { type: 'text/plain' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = `e-ticket-${g.id.replace('#','')}.txt`
  a.click()
  URL.revokeObjectURL(a.href)
}
</script>
