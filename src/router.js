import Vue from 'vue'
import Router from 'vue-router'
import cover from './views/cover'
import index from './views/index'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path:'/',
          component:cover
      },
      {
          path:'/index',
          component:index
      }
  ]
})
