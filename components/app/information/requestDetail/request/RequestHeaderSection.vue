<template>
    <div class="flex flex-col justify-start items-start bg-neutral rounded-md w-full mx-4 my-2">
        <div class="collapse bg-base-200 rounded-xl">
            <input type="checkbox" /> 
            <div class="collapse-title">
                <p class="text-2xl font-bold">Headers:</p>
            </div>
            <div class="collapse-content"> 
                <p class="text-lg font-semibold" v-for="header in data" :key="header.name"> {{ header.name }}: <span class="text-sm font-normal"> {{ header.value }}</span> </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
});
</script>