<template>
    <img class="w-[50%] my-2 mx-0" :src="image_url" />
</template>

<script setup>
const { image_url } = defineProps({
    image_url: String
})
</script>