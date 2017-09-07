import Vue from 'vue'
import Router from 'vue-router'
import can from '../components/can/can.vue'
import cat from '../components/cat/cat.vue'
import food from '../components/food/food.vue'
import home from '../components/home/home.vue'
import sale from '../components/sale/sale.vue'
import screen from '../components/screen/screen.vue'
import classify from '../components/classify/classify.vue'
import myPet from '../components/myPet/myPet.vue'
import shoppingCart from '../components/shoppingCart/shoppingCart.vue'
import common from '../components/common/common.vue'
import dynamic from '../components/dynamic/dynamic.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/home',
      component: home,
      name:home,
      children:[

      ]
    },
    {
      path: '/classify',
      component:classify
    },
    {
      path: '/myPet',
      component:myPet,
      name:myPet,
      redirect: '/common',
      children:[
        {
          path: '/dynamic',
          component: dynamic,
          name:dynamic
        },
        {
          path: '/common',
          component: common,
          name:common
        }
      ]
    },
    {
      path: '/shoppingCart',
      component:shoppingCart
    },
    {
      path: '/can',
      component: can
    },
    {
      path: '/cat',
      component:cat
    },
    {
      path: '/food',
      component: food
    },
    {
      path: '/sale',
      component: sale
    },
    {
      path: '/screen',
      component:screen
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
