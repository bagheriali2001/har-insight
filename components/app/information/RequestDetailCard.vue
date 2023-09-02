<template>
	<div class="flex flex-col justify-start items-center bg-neutral rounded-md h-full w-full m-4 card shadow-xl overflow-x-hidden">
		<NavigationTabComponent
			:current-tab="currentTab"
			:tabs="tabs"
			class="w-full"
			@update-current-tab="currentTab = $event"
		/>
		<GeneralTabSection
			v-if="currentTab === 'general'"
			:data="generalTabInfo.firstSectionInfo"
		/>
		<RequestTabSection
			v-if="currentTab === 'request'"
			:data="request.request"
		/>
		<ResponseTabSection
			v-if="currentTab === 'response'"
			:data="request.response"
		/>
		<!-- <TimingTabComponent :data="request.timings" v-if="currentTab === 'timing'"/> -->
	</div>
</template>

<script setup>
import NavigationTabComponent from './requestDetail/NavigationTabComponent.vue';
import GeneralTabSection from './requestDetail/general/GeneralTabSection.vue';
import RequestTabSection from './requestDetail/request/RequestTabSection.vue';
import ResponseTabSection from './requestDetail/response/ResponseTabSection.vue';
// import TimingTabComponent from './requestDetail/timing/TimingTabComponent.vue';

const props = defineProps({
	request: Object,
});

const currentTab = ref('general');
const tabs = ref([
	{
		id: 'general',
		name: 'General',
		svgPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
	},
	{
		id: 'request',
		name: 'Request',
		svgPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
	},
	{
		id: 'response',
		name: 'Response',
		svgPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
	},
	// {
	//     id: 'timing',
	//     name: 'Timing',
	//     svgPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
	// },
	// {
	//     id: 'extra',
	//     name: 'Extra',
	//     svgPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
	// },
]);

console.log(props.request);

const generalTabInfo = ref({
	firstSectionInfo: {
		requestURL: props.request.request.url,
		requestMethod: props.request.request.method,
		requestHTTPVersion: props.request.request.httpVersion,
		status: props.request.response.status,
		statusText: props.request.response.statusText,
		serverAddress: props.request.serverIPAddress,
		time: props.request.time,
		startTime: props.request.startedDateTime,
	}
});

const requestTabInfo = ref(props.request.request);
</script>