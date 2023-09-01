<template>
	<div class="collapse collapse-arrow bg-base-200 rounded-xl w-[98%] mx-auto my-2">
		<input type="checkbox"> 
		<div class="collapse-title">
			<p class="text-2xl font-bold">
				Headers:
			</p>
		</div>
		<div class="collapse-content"> 
			<p
				v-for="header in data"
				:key="header.name"
				class="text-lg font-semibold"
			>
				{{ header.name }}: <span class="text-sm font-normal"> {{ header.value }}</span>
			</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	data: Object,
});
</script>