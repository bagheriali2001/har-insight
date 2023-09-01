<template>
    <div class="collapse collapse-arrow bg-base-200 rounded-xl w-[98%] mx-auto my-2">
        <input type="checkbox" checked="checked" /> 
        <div class="collapse-title">
            <p class="text-2xl font-bold">General:</p>
        </div>
        <div class="collapse-content"> 
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