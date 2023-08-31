<template>
    <div class="flex flex-col justify-start items-start bg-neutral rounded-md w-full mx-4 my-2">
        <p class="text-2xl font-bold">Content:</p>
        <div class="">
            <p class="text-lg font-semibold">Mime Type: <span class="text-sm font-normal"> {{ data.mimeType }}</span> </p>
            <p class="text-lg font-semibold">Text: <span class="text-sm font-normal"> {{ data.text }}</span> </p>
            <p class="text-lg font-semibold">Compression: <span class="text-sm font-normal"> {{ data.compression }}</span> </p>
            <p class="text-lg font-semibold">Size: <span class="text-sm font-normal"> {{ data.size }}</span> </p>
            <p class="text-lg font-semibold">Encoding: <span class="text-sm font-normal"> {{ data.encoding }}</span> </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
});
</script>