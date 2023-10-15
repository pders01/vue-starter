<template>
    <div class="prose">
        <h1>rss</h1>
        <h2>Welcome back, {{ user.name }} 👋</h2>
        <p>
            Looks like you haven't added any feeds yet,
            <a href="/#feed-url">add</a> your first one!
        </p>
        <form @submit.prevent="handleSubmit" id="add-feed-form">
            <div class="join w-full">
                <input
                    type="url"
                    placeholder="e.g. https://news.ycombinator.com/rss"
                    class="input join-item input-bordered w-full max-w-xs"
                    id="feed-url"
                    name="feed-url"
                    v-model="feedUrl"
                />
                <button type="submit" class="btn btn-primary join-item">
                    Add
                </button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";

type User = {
    name?: string,
}

export default {
    data() {
        return {
            feedUrl: "",
            user: {} as User,
        };
    },
    async setup() {
        const token = sessionStorage.getItem("jwt_token");
        if (!token) {
            return;
        }
        
        const response = await fetch(
            "https://gin-production-fd22.up.railway.app/private/me",
            {
                mode: "cors",
                method: "GET",
                credentials: "include",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        
        let user;
        if (response.ok) {
            const result = await response.json();
            user = ref({
                name: result.user
            })
        }

        if (!user) {
            user = ref({})
        }

        return {
            user,
        };
    },
    methods: {
        async handleSubmit() {
            if (this.feedUrl) {
                const token = sessionStorage.getItem("jwt_token");
                if (!token) {
                    return;
                }

                const response = await fetch(
                    "https://gin-production-fd22.up.railway.app/private/feeds",
                    {
                        mode: "cors",
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,

                        },
                        body: JSON.stringify({
                            url: this.feedUrl,
                        }),
                    },
                );

                if (response.ok) {
                    this.$emit("added");
                }
            }
        },
    },
};
</script>
