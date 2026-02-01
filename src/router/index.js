import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/design',
    name: 'Design',
    component: () => import('../views/DesignWork.vue'),
    meta: { title: 'Design Work' }
  },
  {
    path: '/development',
    name: 'Development',
    component: () => import('../views/DevelopmentWork.vue'),
    meta: { title: 'Development Work' }
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: () => import('../views/CaseStudies.vue'),
    meta: { title: 'Case Studies' }
  },
  {
    path: '/case-studies/:slug',
    name: 'CaseStudyDetail',
    component: () => import('../views/CaseStudyDetail.vue'),
    meta: { title: 'Case Study' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactPage.vue'),
    meta: { title: 'Contact' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Update page title
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Portfolio` || 'Portfolio'
  next()
})

export default router
