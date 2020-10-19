import Layout from '../views/layout.vue' 
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
       
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login.vue')
  },
  {
    path: '/',
    name: 'home',
    redirect: '/login',
    component: Layout, // 导入组件 Layout
    hidden: true,
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import( '../views/about.vue')
      },
      {
        path: '/userlist',
        name: 'userlist',
        component: () => import( '../views/dataManage/userlist.vue')
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import( '../views/chart.vue')
      },
      {
        path: '/footlist',
        name: 'footlist',
        component: () => import( '../views/dataManage/footlist.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import( '../views/dataManage/order.vue')
      }
    ]
}
 
]

const router = new VueRouter({
  routes
})

export default router
