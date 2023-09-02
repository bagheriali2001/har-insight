<template>
	<div class="collapse collapse-arrow bg-base-200 rounded-xl w-[98%] mx-auto my-2">
		<input
			type="checkbox"
			checked="checked"
		> 
		<div class="collapse-title">
			<p class="text-2xl font-bold">
				General:
			</p>
		</div>
		<div class="collapse-content"> 
			<p class="text-lg font-semibold">
				Response Status: <span class="text-sm font-normal"> {{ data.status }}</span>
			</p>
			<p class="text-lg font-semibold">
				Response Status Text: <span class="text-sm font-normal"> {{ data.statusText }}</span>
			</p>
			<p class="text-lg font-semibold">
				Response HTTP Version: <span class="text-sm font-normal"> {{ data.httpVersion }}</span>
			</p>
			<p class="text-lg font-semibold">
				Response Redirect URL: <span class="text-sm font-normal"> {{ data.redirectURL }}</span>
			</p>
			<p class="text-lg font-semibold">
				Header Size: <span class="text-sm font-normal"> {{ data.headersSize != '-1' ? data.headersSize : '0' }}</span>
			</p>
			<p class="text-lg font-semibold">
				Body Size: <span class="text-sm font-normal"> {{ data.bodySize != '-1' ? data.bodySize : '0' }}</span>
			</p>
			<p class="text-lg font-semibold">
				Comment: <span class="text-sm font-normal"> {{ data.comment }}</span>
			</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	data: Object,
});
</script>