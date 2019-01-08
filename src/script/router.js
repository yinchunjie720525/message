import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import NewView from '../components/NewView.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Login from '../components/Login'
import Register from '../components/Register'
import NewPost from '../components/NewPost'
import NewUserAdd from '../components/NewUserAdd'

Vue.use(VueRouter)

const routes = [
    {path:"/",component:Index},
    {path:'/HelloWorld', component:HelloWorld},
    {path:'/NewView/:id',component:NewView},
    {path:'/Login',component:Login},
    {path:'/Register',component:Register},
    {path:'/NewPost',component:NewPost},
    {path:'/NewUserAdd',component:NewUserAdd}
]
const router = new VueRouter({
    routes,//相当于router:routes
    mode:"history"//去除url上的#
})

export default router