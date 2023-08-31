<template>
    <div class="">
        <p class="text-lg font-semibold" v-for="key in Object.keys(data)" :key="key"> {{ key }}: <span class="text-sm font-normal"> {{ data[key] }}</span> </p>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
})
</script>