import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '物件名 | 住協グループの住まい情報',
      des: '物件の説明が入ります。'
    },
  },{
    path: '/concept',
    name: 'concept',
    component: () => import('../views/ConceptView.vue'),
    meta: {
      title: 'コンセプト | 住協グループの住まい情報',
      des: 'コンセプトページの説明が入ります。'
    },
  },{
    path: '/layout',
    name: 'layout',
    component: () => import('../views/LayoutView.vue'),
    meta: {
      title: 'レイアウト | 住協グループの住まい情報',
      des: 'レイアウトページの説明が入ります。'
    }
  },{
    path: '/plan',
    name: 'plan',
    component: () => import('../views/PlanView.vue'),
    meta: {
      title: 'プラン | 住協の住まい情報',
      meta: 'プランページの説明文が入ります。'
    }
  },{
    path: '/euipment',
    name: 'euipment',
    component: () => import('../views/EuipmentView.vue'),
    meta: {
      title: '設備・仕様 | 住協グループの住まい情報',
      meta: '設備・仕様ページの説明文が入ります。'
    }
  },{
    path: '/location',
    name: 'location',
    component: () => import('../views/LocationView.vue'),
    meta: {
      title: '周辺環境 | 住協グループの住まい情報',
      meta: '周辺環境ページの説明文が入ります。'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title;
  }
  next();
});

export default router
