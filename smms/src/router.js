import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//引入登录组件
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/useradd',
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/UserAdd.vue')
    },
    {
      path: '/userlist',
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/UserList.vue')
    },
    {
      path: '/userpwdedit',
      //添加用户
      //异步加载
      component: () => import(/* webpackChunkName: "about" */ './views/UserPwdEdit.vue')
    }
  ]
})
