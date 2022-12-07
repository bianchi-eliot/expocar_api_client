import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ShopView from '../views/Shop/Shop.vue'
import MapView from '../views/Map.vue'
import PlanningView from '../views/Planning.vue'
import LogSignView from '../views/LogSign.vue'
import AccountView from '../views/Account.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopView
    },
    {
        path: '/map',
        name: 'map',
        component: MapView
    },
    {
        path: '/planning',
        name: 'planning',
        component: PlanningView
    },
    {
        path: '/log-sign',
        name: 'log-sign',
        component: LogSignView
    },
    {
        path: '/account',
        name: 'account',
        component: AccountView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
