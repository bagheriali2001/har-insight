<template>
	<img
		class="w-[50%] my-2 mx-0"
		:src="imageUrl"
	>
</template>

<script setup>
const { imageUrl } = defineProps({
	imageUrl: String
})
</script>