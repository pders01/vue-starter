import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Feed from "./views/Feed.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/feed/:id",
            component: Feed,
        },
    ],
});
