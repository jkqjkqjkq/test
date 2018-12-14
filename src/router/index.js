import Vue from 'vue'
import Router from 'vue-router'

// 引入一级组件
import Index from '@/components/Index'
import Evm from '@/components/Evm'
import Me from '@/components/Me'


// 引入二级组件
import All from '@/components/topics/All'
import Ask from '@/components/topics/Ask'
import Good from '@/components/topics/Good'
import Job from '@/components/topics/Job'
import Share from '@/components/topics/Share'
import Dev from '@/components/topics/Dev'
//引入主题详细页
import Show from '@/components/topics/Show'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/',
          component:All
        },
        {
          path: 'good',
          component:Good
        },
        {
          path: 'dev',
          component:Dev
        },
        {
          path: 'share',
          component:Share
        },
        {
          path: 'ask',
          component:Ask
        },
        {
          path: 'job',
          component:Job
        },
        {
          path: 'show/:id',
          component:Show
        }
      ]

    },
     {
      path: '/evm',
      name: 'Evm',
      component: Evm
    },
     {
      path: '/me',
      name: 'Me',
      component: Me
    },
    //跳转路由
    {
      path:'/*',
      redirect:'/index'
    }
  ]
})
