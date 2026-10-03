<template>
  <div class="toolbar">
    <div class="tabs">
      <template v-if="mode === 'single'">
        <button class="tab active">{{ title }} <span>{{ count }}</span></button>
      </template>
      <template v-else>
        <button :class="['tab',{active:tab==='all'}]" @click="$emit('update:tab','all')">Ticket Check-In</button>
        <button :class="['tab',{active:tab==='invite'}]" @click="$emit('update:tab','invite')">Invitation Check-In</button>
      </template>
    </div>
    <div class="filters">
      <label class="page-size">Tampilkan
        <select class="select" :value="pager.perPage" @change="pager.perPage = Number($event.target.value); pager.page = 1">
          <option :value="5">5</option><option :value="10">10</option><option :value="20">20</option><option :value="50">50</option>
        </select>
        entri per halaman
      </label>
      <label class="search"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg><input :value="q" @input="$emit('update:q',$event.target.value)" placeholder="Cari tamu, tiket, nama..."/></label>
      <select class="select" :value="cat" @change="$emit('update:cat',$event.target.value)"><option value="">Semua Kategori</option><option v-for="o in options" :key="o" :value="o">{{ o }}</option></select>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import guests from '../../data/guests.js'
import { pager } from '../../data/pagination.js'
import { dashboardFilter } from '../../data/filter.js'
defineProps({ tab: String, q: String, cat: String, mode: { type: String, default: 'tabs' }, title: String, count: String })
defineEmits(['update:tab','update:q','update:cat'])
const options = computed(() => [...new Set(guests.filter(g => !dashboardFilter.event || g.venue === dashboardFilter.event).map(g => `${g.cat} - ${g.venue}`))].sort())
</script>
