<script setup lang="ts"></script>

<template>
    <nav
        class="fixed right-4 top-4 rounded-xl bg-white p-2 text-gray-900 dark:bg-gray-900 dark:text-white"
    >
        rss
    </nav>
    <div class="flex">
        <aside
            class="flex h-screen flex-col bg-white px-8 pt-4 text-gray-900 dark:bg-gray-900 dark:text-white"
        >
            <router-link to="/" class="">rss</router-link>
            Feeds
        </aside>
        <section class="p-8">
            <RouterView />
        </section>
    </div>
</template>
