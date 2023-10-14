<template>
    <div class="prose">
        <h1>rss</h1>
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
export default {
    data() {
        return {
            feedUrl: "",
        };
    },
    methods: {
        async handleSubmit() {
            if (this.feedUrl) {
                const response = await fetch(
                    "https://gin-production-fd22.up.railway.app/feeds",
                    {
                        mode: "cors",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
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
