import { createRouter, createMemoryHistory } from "vue-router";
// import

const routes = [
    {
        path: '/',
        redirect: '/bank'
    },
    {
        path: '/bank',
        component: () => import("../pages/bank/index.vue")
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router;