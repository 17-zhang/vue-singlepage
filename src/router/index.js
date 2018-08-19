import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home'
import About from '../view/about'
import ShowUI from '../view/showui'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/showui',
      name: 'showui',
      component: ShowUI
    }
  ]
})
