import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from './components/Register'

Vue.use(VueRouter)

export default new Router({
  routes: [
      {
          path:'/',
          name:'home',
          component: Home
      },
      {
        path:'/register',
        name:'register',
        component: Register
    },
    {
        path:'/menu',
        name:'menu',
        component: Menu
    }
  ]
})
