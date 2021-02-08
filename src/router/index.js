import Vue from 'vue'
import VueRouter from 'vue-router'
import baseLayout from '@/layouts/baseLayout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'System',
    meta: { title: '系统信息管理' },
    component: baseLayout,
    redirect: '/system/add',
    children: [
      {
        path: '/system/add',
        name: 'SystemAdd',
        meta: { title: '新增系统' },
        component: () => import('@/views/system/add/index.vue')
      },
      {
        path: '/system/role',
        name: 'SystemRole',
        meta: { title: '角色编辑' },
        component: () => import('@/views/system/role/index.vue')
      },
      {
        path: '/system/manage',
        name: 'SystemManage',
        meta: { title: '系统管理' },
        component: () => import('@/views/system/manage/index.vue')
      }
    ]
  },
  {
    path: '/staff',
    name: 'Staff',
    meta: { title: '' },
    component: baseLayout,
    redirect: '/staffManage',
    children: [
      {
        path: 'staffManage',
        name: 'StaffManage',
        meta: { title: '员工管理' },
        component: () => import('@/views/staff/index.vue')
      }
    ]
  },
  {
    path: '/shop',
    name: 'Shop',
    meta: { title: '' },
    component: baseLayout,
    redirect: '/shopManage',
    children: [
      {
        path: 'shopManage',
        name: 'shopManage',
        meta: { title: '店铺管理' },
        component: () => import('@/views/shop/index.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'forbidden',
    component: () => import('@/views/401/index.vue')
  },
  {
    path: '*',
    name: 'None',
    component: () => import('@/views/404/index.vue')
  }
]

const router = new VueRouter({
  routes
})
// 捕获路由异常
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
