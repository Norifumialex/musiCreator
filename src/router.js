import Vue from 'vue'
import Router from 'vue-router'
import Home from './main'
import Register from './components/Register'
import Menu from './components/Menu'

Vue.use(Router)

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