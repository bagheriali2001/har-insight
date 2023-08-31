<template>
    <div class="flex flex-col justify-start items-start bg-neutral rounded-md w-full mx-4 my-2">
        <p class="text-2xl font-bold">Query String:</p>
        <div class="">
            <p class="text-lg font-semibold" v-for="query in data" :key="query.name"> {{ query.name }}: <span class="text-sm font-normal"> {{ query.value }}</span> </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
});
</script>