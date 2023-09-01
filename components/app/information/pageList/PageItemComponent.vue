<template>
	<div class="flex flex-col justify-center items-center p-4 bg-neutral hover:bg-neutral-focus rounded-md my-[16px] mx-auto h-32 w-64 card shadow-xl z-0">
		<p>{{ pageURLDetails.host }}</p>
		<p>{{ pageURLDetails.protocol }}</p>
		<p class="text-sm tooltip min-x-[400px]" :data-tip="pageURLDetails.origin + '\n' + pageURLDetails.org_pathname">{{ pageURLDetails.pathname }}</p>
	</div>
</template>

<script setup>
const props = defineProps({
  page: Object,
});

const pageURLDetails = computed(() => {
	const pageURL = new URL(props.page.title);

	return {
		host: pageURL.host,
		pathname: (pageURL.pathname.length > 25) ? pageURL.pathname.substring(0, 25) + '...' : pageURL.pathname,
		org_pathname: pageURL.pathname,
		protocol: pageURL.protocol,
		origin: pageURL.origin,
		url: pageURL.href,
	}
});
</script>
