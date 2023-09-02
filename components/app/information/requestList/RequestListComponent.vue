<template>
	<div class="h-full justify-center items-center overflow-y-auto">
		<RequestItemComponent
			v-for="request in requests"
			:key="request.connection"
			:request="request"
			class="w-3/4 my-6"
			@click="$emit('updateChosenRequest', request)"
		/>
	</div>
</template>

<script setup>
import RequestItemComponent from './RequestItemComponent.vue'

const props = defineProps({
	requests: Object,
});
</script>