<script lang="ts" setup>
import { Ref, ref } from "vue";

interface Feed {
    ID: number;
    UserID: number;
    URL: string;
    Title: string;
    Description: string;
    Items: Item[];
}

interface Item {
    Title: string;
    Description: string;
    URL: string;
}

const feeds: Ref<Feed[]> = ref([]);

const token = sessionStorage.getItem("jwt_token");
if (token) {
    const response = await fetch(
        "https://gin-production-fd22.up.railway.app/private/feeds",
        {
            mode: "cors",
            method: "GET",
            credentials: "include",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    if (response.ok) {
        const result: { feeds: Feed[] } = await response.json();
        feeds.value.push(...result.feeds);
    }
}
</script>

<template>
    <Supense>
        <li class="menu-title" v-if="feeds.length">Feeds</li>
        <ul v-for="feed in feeds" :key="feed.ID">
            <li><a href="">{{ feed.Title }}</a></li>
        </ul>
    </Supense>
</template>
