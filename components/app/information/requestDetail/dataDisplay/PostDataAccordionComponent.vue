<template>
	<div class="collapse collapse-arrow bg-base-200 rounded-xl w-[98%] mx-auto my-2">
		<input type="checkbox"> 
		<div class="collapse-title">
			<p class="text-2xl font-bold">
				PostData:
			</p>
		</div>
		<div class="collapse-content"> 
			<p class="text-lg font-semibold">
				Mime Type: <span class="text-sm font-normal"> {{ data.mimeType }}</span>
			</p>
			<p class="text-lg font-semibold">
				Text: <span class="text-sm font-normal"> {{ data.text }}</span>
			</p>
			<p class="text-lg font-semibold">
				Params:
			</p>
			<ParamCardComponent
				v-for="param in data.params"
				:key="param.name"
				:data="param"
			/>
		</div>
	</div>
</template>

<script setup>
import ParamCardComponent from './ParamCardComponent.vue'

const props = defineProps({
	data: Object,
});
</script>