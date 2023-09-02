<template>
	<div class="collapse collapse-arrow bg-base-200 rounded-xl w-[98%] mx-auto my-2">
		<input type="checkbox"> 
		<div class="collapse-title">
			<p class="text-2xl font-bold">
				Query String:
			</p>
		</div>
		<div class="collapse-content"> 
			<p
				v-for="query in data"
				:key="query.name"
				class="text-lg font-semibold"
			>
				{{ query.name }}: <span class="text-sm font-normal"> {{ query.value }}</span>
			</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	data: Object,
});
</script>