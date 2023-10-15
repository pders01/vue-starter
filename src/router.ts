import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue"
import Feed from "./views/Feed.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
            meta: { requiresAuth: true },
        },
        {
            path: "/login",
            component: Login,
        },
        {
            path: "/feed/:id",
            component: Feed,
            meta: { requiresAuth: true },
        },
    ],
});

router.beforeEach(async (to, _, next) => {
    if (!to.meta.requiresAuth) {
        next();
        return;
    }

    const canAccess = await isAuthenticated();
    if (!canAccess) {
        next("/login");
        return;
    }

    next();
});

async function isAuthenticated() {
    const token = sessionStorage.getItem('jwt_token');
    if (!token) {
        return false;
    }

    const response = await fetch("https://gin-production-fd22.up.railway.app/private/status", {
        mode: "cors",
        method: "GET",
        credentials: "include",
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    });

    if (response.ok) {
        return true;
    }

    return false;
}

export default router;
