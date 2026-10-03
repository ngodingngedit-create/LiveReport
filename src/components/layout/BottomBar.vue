<template>
  <div v-if="show" class="bottombar">
    <div class="container bottombar-inner">
      <div class="pager-btns">
        <button v-if="showHead" :class="['pg',{active:1===pager.page}]" @click="pager.page=1">1</button>
        <span v-if="showHead" class="pg-ellipsis">…</span>
        <button v-for="p in visiblePages" :key="p" :class="['pg',{active:p===pager.page}]" @click="pager.page=p">{{ p }}</button>
        <span v-if="showTail" class="pg-ellipsis">…</span>
        <button v-if="showTail" :class="['pg',{active:pager.total===pager.page}]" @click="pager.page=pager.total">{{ pager.total }}</button>
      </div>
      <div class="pager-nav"><button class="pg" :disabled="pager.page<=1" @click="pager.page--">Sebelumnya</button><button class="pg pg-next" :disabled="pager.page>=pager.total" @click="pager.page++">Berikutnya</button></div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { pager } from '../../data/pagination.js'
const route = useRoute()
const show = computed(() => route.path === '/dashboard' || route.path === '/pemesan')
const visiblePages = computed(() => {
  const total = pager.total
  const windowSize = 4
  let start = Math.min(pager.page, Math.max(1, total - windowSize + 1))
  if (pager.page <= 2) start = 1
  const end = Math.min(total, start + windowSize - 1)
  const out = []
  for (let i = start; i <= end; i++) out.push(i)
  return out
})
const showTail = computed(() => pager.total > 5 && visiblePages.value[visiblePages.value.length - 1] < pager.total)
const showHead = computed(() => pager.total > 5 && visiblePages.value[0] > 1)
</script>
