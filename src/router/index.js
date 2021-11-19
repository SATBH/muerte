import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/mision',
    name: 'Mision',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/Mision.vue')
  },
  {
    path: '/valores',
    name: 'Valores',
    component: () => import('../components/Valores.vue')
  },
  {
    path: '/quienes_somos',
    name: 'Quienes Somos',
    component: () => import('../components/QuienesSomos.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
scrollBehavior () {
	return { behaviour: 'scroll', left: 0, top: 0 }
},
  routes,
})

export default router
