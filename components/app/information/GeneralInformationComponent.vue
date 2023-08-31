<template>
    <div class="flex flex-row w-full">
        <div class="w-1/6 h-full">
            <p class="text-center text-gray-500 text-sm">Har Version: {{ props?.version }}</p>
        </div>
        <div class="w-1/6 h-full flex flex-col justify-center items-center">
            <p class="text-center text-gray-500 text-sm">Creator: {{ props?.creator?.name }}</p>
            <p class="text-center text-gray-500 text-sm">Creator Version: {{ props?.creator?.version }}</p>
        </div>
        <div class="w-1/6 h-full flex flex-col justify-center items-center">
            <p class="text-center text-gray-500 text-sm">Browser: {{ props?.browser?.name || "N/A" }}</p>
            <p class="text-center text-gray-500 text-sm">Browser Version: {{ props?.browser?.version || "N/A" }}</p>
        </div>
        <div class="w-1/6 h-full">
            <p class="text-center text-gray-500 text-sm">Comment: {{ props?.comment || "N/A" }}</p>
        </div>

        <div class="w-1/6 h-full">
            <slot name="config_button"></slot>
        </div>

        <div class="w-1/6 h-full">
            <slot name="new_file_load"></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    version: String,
    creator: Object,
    browser: Object,
    comment: String
})
</script>