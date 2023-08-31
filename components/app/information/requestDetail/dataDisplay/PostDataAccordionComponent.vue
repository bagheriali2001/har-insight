<template>
    <div class="flex flex-col justify-start items-start bg-neutral rounded-md w-full mx-4 my-2">
        <p class="text-2xl font-bold">PostData:</p>
        <div class="">
        <!-- <p class="text-lg font-semibold" v-for="key in Object.keys(data)" :key="key"> {{ key }}: <span class="text-sm font-normal"> {{ data[key] }}</span> </p> -->
            <p class="text-lg font-semibold">Mime Type: <span class="text-sm font-normal"> {{ data.mimeType }}</span> </p>
            <p class="text-lg font-semibold">Text: <span class="text-sm font-normal"> {{ data.text }}</span> </p>
            <p class="text-lg font-semibold">Params: </p>
            <ParamCardComponent v-for="param in data.params" :key="param.name" :data="param"></ParamCardComponent>
        </div>
    </div>
</template>

<script setup>
import ParamCardComponent from './ParamCardComponent.vue'

const props = defineProps({
    data: Object,
});
</script>