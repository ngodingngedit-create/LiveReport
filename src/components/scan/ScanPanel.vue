<template>
  <section class="scan-fullscreen">
    <div class="scan-camera">
      <video ref="videoEl" autoplay playsinline muted></video>
      <div class="scan-corners"><i></i><i></i><i></i><i></i></div>
      <div class="scan-line"></div>
      <div class="scan-top">
        <router-link to="/dashboard" class="scan-back" aria-label="Kembali ke dashboard"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></router-link>
        <div><h2>{{ title }}</h2><p>{{ subtitle }}</p></div>
      </div>
      <div v-if="!cameraOk" class="scan-fallback">
        <div class="scan-icon">◉</div>
        <p>{{ camMsg }}</p>
      </div>
    </div>
    <div v-if="result || error" class="panel scan-sheet">
      <div class="scan-popup-bar"></div>
      <div class="scan-popup-head"><h2>Hasil Scan</h2><button class="icon-btn" @click="close" aria-label="Tutup">✕</button></div>
      <div v-if="error" class="scan-error">{{ error }}</div>
      <div v-else class="scan-card">
        <div class="guest-name">{{ displayName }}</div>
        <div class="guest-mail">{{ result.email }} • <span class="num">{{ result.id }}</span></div>
        <div class="kv"><span>No. HP</span><b class="num">{{ result.phone }}</b></div>
        <div class="kv"><span>Kategori</span><b>{{ type === 'invite' ? 'Invitation' : result.cat }}</b></div>
        <div class="kv"><span>Seat</span><b class="num">{{ result.seat }}</b></div>
        <div class="kv"><span>Status</span><span :class="['status', result.status === 'Checked-In' ? 'status-in' : 'status-pend']">{{ result.status }}</span></div>
        <button v-if="result.status !== 'Checked-In'" class="btn btn-primary scan-confirm" @click="confirm">Konfirmasi Check-in</button>
        <p v-else class="scan-done">Tamu sudah check-in pada {{ result.date }}, {{ result.time }}.</p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
const props = defineProps({ type: { type: String, default: 'ticket' }, title: String, subtitle: String })
const result = ref(null)
const error = ref('')
const videoEl = ref(null)
const cameraOk = ref(true)
const camMsg = ref('Mengaktifkan kamera...')
let stream = null
const displayName = computed(() => !result.value ? '' : props.type === 'invite' ? (result.value.media || result.value.name) : result.value.name)
function confirm() {
  if (!result.value) return
  result.value.status = 'Checked-In'
  result.value.date = '16 Agu 2026'
  result.value.time = new Date().toTimeString().slice(0, 8)
}
function close() {
  result.value = null
  error.value = ''
}
async function start() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false })
    if (videoEl.value) videoEl.value.srcObject = stream
    cameraOk.value = true
  } catch {
    cameraOk.value = false
    camMsg.value = 'Kamera tidak tersedia.'
  }
}
function stop() {
  if (stream) stream.getTracks().forEach(t => t.stop())
  stream = null
}
onMounted(start)
onUnmounted(stop)
</script>
