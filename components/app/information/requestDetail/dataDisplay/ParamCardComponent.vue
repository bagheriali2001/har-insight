<template>
    <div class="">
        <p class="text-base font-medium" v-for="key in Object.keys(data)" :key="key"> {{ key }}: <span class="text-sm font-normal"> {{ data[key] }}</span> </p>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
})
</script>