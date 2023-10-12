<template>
    <div v-if="authenticated" class="flex">
        <div class="drawer lg:drawer-open">
            <input id="drawer" type="checkbox" class="drawer-toggle" />
            <div
                class="drawer-content flex flex-col items-center justify-center"
            >
                <section class="p-8">
                    <RouterView />
                </section>
                <label
                    for="drawer"
                    class="btn btn-primary drawer-button lg:hidden"
                    >📋</label
                >
            </div>
            <div class="drawer-side">
                <label
                    for="drawer"
                    aria-label="close sidebar"
                    class="drawer-overlay"
                ></label>
                <ul
                    class="menu bg-base-200 text-base-content min-h-full w-80 p-4"
                >
                    <li class="text-xl">
                        <router-link to="/" class="">rss</router-link>
                    </li>
                    <li class="menu-title">Feeds</li>
                </ul>
            </div>
        </div>
    </div>

    <div v-else>
        <Login @authenticated="handleAuthenticated" />
    </div>
</template>

<script lang="ts">
import Login from "./components/Login.vue";

export default {
    data() {
        return {
            authenticated: false,
        };
    },
    components: {
        Login,
    },
    methods: {
        handleAuthenticated() {
            this.authenticated = true;
        }
    }
};
</script>
