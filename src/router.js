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
    {
        path: "/login",
        component: () =>
            import ("./pages/login-page.vue"),
        name: "Login"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;