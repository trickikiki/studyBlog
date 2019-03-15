import Vue from 'vue'
import Router from 'vue-router'
import cover from './views/cover'
import waterfall from './components/waterfall'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path:'/',
          component:cover
      },
      {
          path:'/waterfall',
          component:waterfall
      }
  ]
})
