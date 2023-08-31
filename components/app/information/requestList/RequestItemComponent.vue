<template>
    <!-- <div class="flex flex-col p-4 bg-neutral hover:bg-neutral-focus rounded-md my-[16px] mx-auto">
        <div class="flex flex-col justify-center items-center h-full">
            <p>A request</p>
        </div>
    </div> -->
    <div class="flex flex-col justify-center items-center p-4 bg-neutral hover:bg-neutral-focus rounded-md my-[16px] mx-auto h-24 w-64 card shadow-xl">
		<!-- show host pathname and protocol -->
		<p>{{ dataSummary.resourceType }}, {{ dataSummary.requestMethod }}</p>
		<p>{{ dataSummary.httpVersion }}, {{ dataSummary.responseStatus }}</p>
		<!-- <p class="text-sm">{{ dataSummary.pathname }}</p> -->
	</div>
</template>

<script setup>
const props = defineProps({
  request: Object,
});

const dataSummary = computed(() => {
    return {
        connection: props.request.connection,
        pageref: props.request.pageref,
        resourceType: props.request._resourceType,
        requestMethod: props.request.request.method,
        httpVersion: props.request.request.httpVersion,
        responseStatus: props.request.response.status,
    }
});
</script>