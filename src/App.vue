<template>
    <div class="flex">
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
                    class="menu min-h-full w-80 bg-base-200 p-4 text-base-content"
                >
                    <li class="text-xl">
                        <router-link to="/" class="">rss</router-link>
                    </li>
                    <li class="menu-title">Feeds</li>
                    <li class="absolute bottom-4"><a @click.stop="handleLogout" class="button button-ghost"
                    >Logout</a
                ></li>
                </ul>
                
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    setup() {
        const token = sessionStorage.getItem("jwt_token");
        if (!token) {
            return;
        }

        fetch("https://gin-production-fd22.up.railway.app/private/me", {
            mode: "cors",
            method: "GET",
            credentials: "include",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((result) => console.log(result));
    },
    methods: {
        async handleLogout() {
            const response = await fetch(
                "https://gin-production-fd22.up.railway.app/logout",
                {
                    mode: "cors",
                    method: "GET",
                    credentials: "include",
                },
            );

            if (response.ok) {
                sessionStorage.clear();
                this.$router.push("/login");
            }
        },
    },
};
</script>
