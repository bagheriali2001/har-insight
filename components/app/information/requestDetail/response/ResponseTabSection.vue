<template>
    <div class="overflow-y-auto overflow-x-hidden h-full w-full">
        <ResponseGeneralSection :data="firstSectionData" />
        <ResponseHeaderSection :data="data.headers" v-if="data.headers && data.headers.length > 0" />
        <CookieAccordionComponent :data="data.cookies" v-if="data.cookies && data.cookies.length > 0" />
        <ResponseContentSection :data="data.content" v-if="data.content" />
    </div>
</template>

<script setup>
import ResponseGeneralSection from './ResponseGeneralSection.vue';
import ResponseHeaderSection from './ResponseHeaderSection.vue';
import CookieAccordionComponent from '../dataDisplay/CookieAccordionComponent.vue';
import ResponseContentSection from './ResponseContentSection.vue';

const props = defineProps({
    data: Object,
});

const firstSectionData = ref({
    status: props.data.status,
    statusText: props.data.statusText,
    httpVersion: props.data.httpVersion,
    redirectURL: props.data.redirectURL,
    headersSize: props.data.headersSize,
    bodySize: props.data.bodySize,
    comment: props.data.comment,
})
</script>