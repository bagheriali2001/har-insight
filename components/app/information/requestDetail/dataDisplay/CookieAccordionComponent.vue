<template>
    <div class="flex flex-col justify-start items-start bg-neutral rounded-md w-full mx-4 my-2">
        <div class="collapse bg-base-200 rounded-xl">
            <input type="checkbox" /> 
            <div class="collapse-title">
                <p class="text-2xl font-bold">Cookies:</p>
            </div>
            <div class="collapse-content"> 
                <CookieCardComponent v-for="cookie in data" :data="cookie" :key="cookie.name" />
            </div>
        </div>
    </div>
</template>

<script setup>
import CookieCardComponent from './CookieCardComponent.vue'
const props = defineProps({
    data: Object,
});
</script>