<template>
	<div class="collapse collapse-arrow bg-base-200 rounded-xl w-[98%] mx-auto my-2">
		<input type="checkbox"> 
		<div class="collapse-title">
			<p class="text-2xl font-bold">
				Cookies:
			</p>
		</div>
		<div class="collapse-content"> 
			<CookieCardComponent
				v-for="cookie in data"
				:key="cookie.name"
				:data="cookie"
			/>
		</div>
	</div>
</template>

<script setup>
import CookieCardComponent from './CookieCardComponent.vue'
const props = defineProps({
	data: Object,
});
</script>