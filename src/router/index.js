import { createRouter, createMemoryHistory } from "vue-router";
// import

const routes = [
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