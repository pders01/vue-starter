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
                    class="input input-bordered join-item w-full max-w-xs"
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
        handleSubmit() {
            console.log("Form submitted!", this.feedUrl);
        },
    },
};
</script>
