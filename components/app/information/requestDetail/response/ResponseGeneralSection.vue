<template>
    <div class="flex flex-col justify-start items-start bg-neutral rounded-md w-full mx-4 my-2">
        <div class="collapse bg-base-200 rounded-xl">
            <input type="checkbox" /> 
            <div class="collapse-title">
                <p class="text-2xl font-bold">General:</p>
            </div>
            <div class="collapse-content"> 
                <p class="text-lg font-semibold">Response Status: <span class="text-sm font-normal"> {{ data.status }}</span> </p>
                <p class="text-lg font-semibold">Response Status Text: <span class="text-sm font-normal"> {{ data.statusText }}</span> </p>
                <p class="text-lg font-semibold">Response HTTP Version: <span class="text-sm font-normal"> {{ data.httpVersion }}</span> </p>
                <p class="text-lg font-semibold">Response Redirect URL: <span class="text-sm font-normal"> {{ data.redirectURL }}</span> </p>
                <p class="text-lg font-semibold">Header Size: <span class="text-sm font-normal"> {{ data.headersSize != '-1' ? data.headersSize : '0' }}</span> </p>
                <p class="text-lg font-semibold">Body Size: <span class="text-sm font-normal"> {{ data.bodySize != '-1' ? data.bodySize : '0' }}</span> </p>
                <p class="text-lg font-semibold">Comment: <span class="text-sm font-normal"> {{ data.comment }}</span> </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
});
</script>