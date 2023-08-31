<template>
    <div class="flex flex-col justify-start items-start bg-neutral rounded-md w-full mx-4 my-2">
        <p class="text-2xl font-bold">General:</p>
        <div class="">
            <p class="text-lg font-semibold">Request URL: <span class="text-sm font-normal"> {{ data.requestURL }}</span> </p>
            <p class="text-lg font-semibold">Request Method: <span class="text-sm font-normal"> {{ data.requestMethod }}</span> </p>
            <p class="text-lg font-semibold">Request HTTP Version: <span class="text-sm font-normal"> {{ data.requestHTTPVersion }}</span> </p>
            <p class="text-lg font-semibold">Status: <span class="text-sm font-normal"> {{ data.status }}</span> </p>
            <p class="text-lg font-semibold">Status Text: <span class="text-sm font-normal"> {{ data.statusText }}</span> </p>
            <p class="text-lg font-semibold">Server Address: <span class="text-sm font-normal"> {{ data.serverAddress }}</span> </p>
            <p class="text-lg font-semibold">Time: <span class="text-sm font-normal"> {{ data.time }}</span> </p>
            <p class="text-lg font-semibold">Start Time: <span class="text-sm font-normal"> {{ data.startTime }}</span> </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
});
</script>