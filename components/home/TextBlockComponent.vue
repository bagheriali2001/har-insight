<template>
	<div
		class="flex flex-col justify-center rounded-box w-[100%] h-[50%] px-[10%] py-[5%] m-[5%] max-w-[40vw]"
		style="background: #e5c362;"
	>
		<div class="flex flex-col justify-center my-1 mx-auto">
			<h1 class="text-xl font-bold text-stone-800">
				{{ title }}
			</h1>
		</div>
		<div class="flex flex-col justify-center my-1 mx-auto">
			<p class="text-base text-stone-800">
				{{ description }}
			</p>
		</div>
	</div>
</template>

<script setup>
const { title, description } = defineProps({
	title: String,
	description: String
})
</script>

<style scoped>
    .rounded-box {
        border-radius: 10px;
        box-shadow: 0 0 50px rgba(209, 225, 214, 0.45);
    }
</style>