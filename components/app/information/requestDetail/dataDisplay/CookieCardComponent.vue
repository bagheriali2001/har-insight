<template>
	<div class="shadow shadow-[#1d283a] m-2 py-3">
		<div class="flex flex-row">
			<div class="flex flex-col w-4/12">
				<p class="text-lg font-semibold mx-3">
					Name: <span class="text-sm font-normal"> {{ data.name }}</span>
				</p>
				<p class="text-lg font-semibold mx-3">
					Path: <span class="text-sm font-normal"> {{ data.path }}</span>
				</p>
				<p class="text-lg font-semibold mx-3">
					Domain: <span class="text-sm font-normal"> {{ data.domain }}</span>
				</p>
				<p class="text-lg font-semibold mx-3">
					Expires: <span class="text-sm font-normal"> {{ data.expires }}</span>
				</p>
			</div>

			<div class="flex flex-col w-8/12">
				<p class="text-lg font-semibold mx-3 truncate">
					Value: <span class="text-sm font-normal"> {{ data.value }}</span>
				</p>
				<p class="text-lg font-semibold mx-3">
					HttpOnly: <span class="text-sm font-normal"> {{ data.httpOnly }}</span>
				</p>
				<p class="text-lg font-semibold mx-3">
					Secure: <span class="text-sm font-normal"> {{ data.secure }}</span>
				</p>
				<p class="text-lg font-semibold mx-3">
					Comment: <span class="text-sm font-normal"> {{ data.comment }}</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	data: Object,
})
</script>

<style scoped>
.card {
    box-shadow: inset 0 2px 4px 0 rgb(29 40 58 / 0.05);
}
</style>