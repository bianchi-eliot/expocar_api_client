import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ShopView from '../views/shop/Shop.vue'
import MapView from '../views/Map.vue'
import PlanningView from '../views/Planning.vue'
import LogSignView from '../views/LogSign.vue'
import AccountView from '../views/Account.vue'
import PieceDetails from "@/views/shop/pieces/PieceDetails.vue";

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
        path: '/shop/piece/:id',
        name: 'details_piece',
        component: PieceDetails
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
