import Vue from 'vue'
import Router from 'vue-router'
import Homelist from '@/page/homelist/homeList'
import Home from '@/page/home/home'
import Index from '@/page/homeshow/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/homelist',
      name:'Homelist',
      component:Homelist,
      children:[
        {
          path:'/index',
          name:'Index',
          component:Index,
          children:[
            {
              path:'/userlist',
              name:'userlist',
              component:()=> import ('../page/usercon/userlist')
            },
            {
              path:'/paylist',
              name:'paylist',
              component:()=> import ('../page/usercon/paylist')
            },
            {
              path:'/leaderlist',
              name:'leaderlist',
              component:()=> import ('../page/usercon/leaderlist')             
            },
            {
              path:'/foodlist',
              name:'foodlist',
              component:()=> import ('../page/usercon/foodlist')             
            },
          ]
        }
      ]
    }
  ]
})
