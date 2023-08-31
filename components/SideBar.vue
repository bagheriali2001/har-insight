<template>
    <div class="drawer fixed">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <label for="my-drawer" class="drawer-button fixed top-0 left-0 m-4 z-50 w-0 h-0">
                <img for="my-drawer" src="../icons/list.svg" alt="logo" class="w-[30px] fixed top-0 left-0 m-4 z-50" />
            </label>
        </div> 
        <div class="drawer-side">
            <label for="my-drawer" class="modal-container drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <NuxtLink v-for="link in pageLinks" :key="link.name" :to="link.link" class="px-4 py-2 text-white hover:bg-primary-400 hover:text-white">
                    {{ link.name }}
                </NuxtLink>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const pageLinks = ref([
    { name: 'Home', link: '/' },
    { name: 'App', link: '/app' },
    { name: 'Roadmap', link: '/roadmap' },
    { name: 'Documentation', link: '/docs' },
])

</script>