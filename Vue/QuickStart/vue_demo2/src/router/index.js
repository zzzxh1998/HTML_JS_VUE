import { createApp } from 'vue'
// import VueRouter from 'vue-router' vue3也报错
import * as VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

const app = createApp({})

//1.创建路由组件
//2.将组件和路由做一个映射
//3.创建router实例

const routes = [
    {path: '/home',component: Home},
    {path: '/user',component: User}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

//将router实例对外进行暴露
export default router
app.use(VueRouter)
