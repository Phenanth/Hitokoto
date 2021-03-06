import Vue from 'vue'
import Router from 'vue-router'

import Loading from '@/components/loading'
import Index from '@/components/index'
import Home from '@/components/home'
import Reminder from '@/components/reminder'
import User from '@/components/user'
import Userinfo from '@/components/user-userinfo'
import Controller from '@/components/user-controller'

Vue.use(Router)

export default new Router({
  base: '/hot/',
  routes: [
    {
      path: '/',
      redirect: '/loading'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect: '/home',
      children: [
      	{
      		path: '/home',
      		component: Home
      	},
      	{
      		path: '/reminder',
      		component: Reminder
      	},
      	{
      		path: '/user',
          component: User,
      		redirect: '/user/controller',
      		children: [
      			{
      				path: '/user/controller',
      				component: Controller
      			},
      			{
      				path: '/user/userinfo',
      				component: Userinfo
      			}
      		]
      	}
      ]
    },
    {
      path: '/loading',
      component: Loading
    }
  ]
})
