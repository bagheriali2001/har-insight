<template>
	<Teleport to="body">
		<ContentTextModalComponent
			:show="showTextModal"
			:text="data.text"
			@close="showTextModal = false"
		/>
	</Teleport>
	<div class="collapse collapse-arrow bg-base-200 rounded-xl w-[98%] mx-auto my-2">
		<input type="checkbox"> 
		<div class="collapse-title">
			<p class="text-2xl font-bold">
				Content:
			</p>
		</div>
		<div class="collapse-content"> 
			<p class="text-lg font-semibold">
				Mime Type: <span class="text-sm font-normal"> {{ data.mimeType }}</span>
			</p>
			<p class="text-lg font-semibold">
				Text: <button
					class="btn btn btn-outline btn-xs"
					@click="showTextModal = true"
				>
					Show
				</button>
			</p>
			<p class="text-lg font-semibold">
				Compression: <span class="text-sm font-normal"> {{ data.compression }}</span>
			</p>
			<p class="text-lg font-semibold">
				Size: <span class="text-sm font-normal"> {{ data.size }}</span>
			</p>
			<p class="text-lg font-semibold">
				Encoding: <span class="text-sm font-normal"> {{ data.encoding }}</span>
			</p>
		</div>
	</div>
</template>

<script setup>
import ContentTextModalComponent from '../dataDisplay/ContentTextModalComponent.vue'
const props = defineProps({
	data: Object,
});

const showTextModal = ref(false);
</script>