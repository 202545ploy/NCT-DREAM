import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'หน้าแรก' },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      meta: { title: 'ลงทะเบียน' },
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      meta: { title: 'เข้าสู่ระบบ' },
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'nctdream' },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/wonders',
      name: 'wonders',
      meta: { title: 'Yo Dream!!' },
      component: () => import('../views/WonderView.vue')
    },
    {
      path: '/add-wonder',
      name: 'add-wonder',
      meta: { title: 'เพิ่มสิ่งnctdream' },
      component: () => import('../components/Wonder/AddWonder.vue')
    },
    {
      path: '/:pachMatch(.*)*',
      name: 'NotFound',
      meta: { title: 'ไม่พบหน้าเพ็จ' },
      component: () => import('../views/ErrorViews.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // document.title = to.meta?.title ?? 'น้อยน่า'
  const titleFromParams = to.params?.pageTitle
  if (titleFromParams !== null) {
    document.title = ` ${to.name} | ${to.meta?.title}`
  } else {
    document.title = to.meta?.title ?? 'น้อยน่า'
  }
  next()
})
export default router