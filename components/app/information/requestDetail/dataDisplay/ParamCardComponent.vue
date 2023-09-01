<template>
	<div class="">
		<p
			v-for="key in Object.keys(data)"
			:key="key"
			class="text-base font-medium"
		>
			{{ key }}: <span class="text-sm font-normal"> {{ data[key] }}</span>
		</p>
	</div>
</template>

<script setup>
const props = defineProps({
	data: Object,
})
</script>