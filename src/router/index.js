import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', name: 'dashboard', component: () => import('../views/Dashboard.vue') },
    { path: '/pemesan', name: 'pemesan', component: () => import('../views/Pemesan.vue') },
    { path: '/checkin', name: 'checkin', component: () => import('../views/Checkin.vue') },
    { path: '/invitation', name: 'invitation', component: () => import('../views/Invitation.vue') },
  ]
})
