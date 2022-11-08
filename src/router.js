import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        component: () =>
            import ("./pages/home-page.vue"),
        name: "Home",
    },
    {
        path: "/sign-up",
        component: () =>
            import ("./pages/sign-up.vue"),
        name: "SignUp",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;