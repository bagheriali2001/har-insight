<template>
	<div class="overflow-y-auto overflow-x-hidden h-full w-full">
		<RequestInfoSection :data="firstSectionData" />
		<RequestHeaderSection
			v-if="data.headers && data.headers.length > 0"
			:data="data.headers"
		/>
		<CookieAccordionComponent
			v-if="data.cookies && data.cookies.length > 0"
			:data="data.cookies"
		/>
		<PostDataAccordionComponent
			v-if="data.postData"
			:data="data.postData"
		/>
		<RequestQuerySection
			v-if="data.queryString && data.queryString != ''"
			:data="data.queryString"
		/>
	</div>
</template>

<script setup>
import RequestInfoSection from './RequestInfoSection.vue';
import RequestHeaderSection from './RequestHeaderSection.vue';
import CookieAccordionComponent from '../dataDisplay/CookieAccordionComponent.vue';
import PostDataAccordionComponent from '../dataDisplay/PostDataAccordionComponent.vue';
import RequestQuerySection from './RequestQuerySection.vue';

const props = defineProps({
	data: Object,
});

const firstSectionData = ref({
	method: props.data.method,
	url: props.data.url,
	httpVersion: props.data.httpVersion,
	headersSize: props.data.headersSize,
	bodySize: props.data.bodySize,
	comment: props.data.comment,
})
</script>