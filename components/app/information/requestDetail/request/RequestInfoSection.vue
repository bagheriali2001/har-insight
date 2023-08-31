<template>
    <div class="flex flex-col justify-start items-start bg-neutral rounded-md w-full mx-4 my-2">
        <p class="text-2xl font-bold">General:</p>
        <div class="">
            <p class="text-lg font-semibold">Request URL: <span class="text-sm font-normal"> {{ data.url }}</span> </p>
            <p class="text-lg font-semibold">Request Method: <span class="text-sm font-normal"> {{ data.method }}</span> </p>
            <p class="text-lg font-semibold">Request HTTP Version: <span class="text-sm font-normal"> {{ data.httpVersion }}</span> </p>
            <p class="text-lg font-semibold">Header Size: <span class="text-sm font-normal"> {{ data.headersSize != '-1' ? data.headersSize : '0' }}</span> </p>
            <p class="text-lg font-semibold">Body Size: <span class="text-sm font-normal"> {{ data.bodySize != '-1' ? data.bodySize : '0' }}</span> </p>
            <p class="text-lg font-semibold">Comment: <span class="text-sm font-normal"> {{ data.comment }}</span> </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
});
</script>