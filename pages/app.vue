<template>
	<!-- TODO: Add overall results, such as count and ... -->
	<div>
		<Teleport to="body">
			<LoadFileModal
				:show="showModal"
				@close="showModal = false"
			>
				<template #header>
					<h1 class="text-xl font-bold">
						Please choose a HAR file to load
					</h1>
				</template>

				<template #body>
					<form>
						<div class="flex flex-row justify-center items-center">
							<input
								id="formFile"
								type="file"
								class="file-input file-input-bordered file-input-primary w-full max-w-sm mx-4"
								accept=".har, .HAR"
								@change="readFile"
							>
						</div>
					</form>
				</template>
			</LoadFileModal>
		</Teleport>
		<!-- <Teleport to="body">
        <ConfigModalComponent :show="showConfigModal" @close="showConfigModal = false"></ConfigModalComponent>
    </Teleport> -->

		<div
			v-if="!file_loaded"
			class="flex flex-col h-screen"
		>
			<div class="flex flex-col justify-center items-center h-full">
				<div class="flex flex-col w-[70%] h-32 my-6">
					<HeaderComponent />
				</div>
				<div class="flex flex-col w-3/4 my-6">
					<button
						class="relative btn btn-outline btn-info text-white font-bold py-2 px-4 rounded-lg w-[30%] mx-auto"
						@click="showModal = true"
					>
						Open HAR File
					</button>
				</div>
			</div>
		</div>


		<div
			v-else
			class="flex flex-col h-screen overflow-y-hidden w-full"
		>
			<div class="flex flex-col justify-center items-center h-full w-full overflow-y-hidden overflow-x-hidden mt-0">
				<GeneralInformationComponent
					:version="file.log.version"
					:creator="file.log.creator"
					:browser="file.log.browser"
					:comment="file.log.comment"
					class="top-0 mx-4 my-[1%] h-[3%]"
				>
					<template #new_file_load>
						<button
							class="btn btn-outline btn-info text-white font-bold py-2 px-2 rounded w-11/12"
							@click="showModal = true"
						>
							Load new HAR File
						</button>
					</template>
					<template #config_button>
					<!-- <button class="btn btn-outline btn-info text-white font-bold py-2 px-2 rounded w-11/12" @click="showConfigModal = true">
                        Show Configurations
                    </button> -->
					</template>
				</GeneralInformationComponent>
				<!-- <div class="divider"></div> -->
				<div class="flex flex-row w-full h-[92%] mb-4 overflow-x-scroll overflow-y-hidden pr-4">
					<div class="flex flex-col min-w-[300px] w-[300px] h-full mb-4">
						<PageListComponent
							:pages="file.log.pages"
							class="h-full"
							@update-chosen-page="selected_page = $event"
						/>
					</div>
					<!-- <div class="divider divider-vertical h-full w-[1px] bg-sky-500 mb-4 mt-0"></div> -->
					<div class="flex flex-col min-w-[300px] w-[300px] h-full mb-4">
						<RequestListComponent
							:requests="display_entries"
							class="h-full"
							@update-chosen-request="selected_request = $event"
						/>
					</div>
					<!-- <div class="divider divider-vertical h-full w-[1px] bg-sky-500 mb-4 mt-0" v-if="selected_request"></div> -->
					<div
						v-if="selected_request"
						class="flex flex-col min-w-[1200px] w-[1200px] h-full me-4"
					>
						<RequestDetailCard
							:key="selected_request.connection+selected_request.url+selected_request.startedDateTime"
							:request="selected_request"
							class="h-full"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import HeaderComponent from '../components/app/HeaderComponent.vue';
import LoadFileModal from '../components/app/LoadFileModal.vue';
import GeneralInformationComponent from '../components/app/information/GeneralInformationComponent.vue';
// import ConfigModalComponent from '../components/app/information/ConfigModalComponent.vue';
import PageListComponent from '../components/app/information/pageList/PageListComponent.vue';
import RequestListComponent from '../components/app/information/requestList/RequestListComponent.vue';
import RequestDetailCard from '../components/app/information/RequestDetailCard.vue';

import har_lib from '../lib/har_analyze.js'

const config = useConfig();

const showModal = ref(false);
const showConfigModal = ref(false);
const file = ref(null)
const file_loaded = ref(false)
const display_entries = ref(null)
const selected_page = ref(null)
const selected_request = ref(null)

function readFile(e) {
	// console.log("reading a har file: ", e.target.files[0]);
	// read as json
	const reader = new FileReader();
	reader.readAsText(e.target.files[0]);
	reader.onload = function () {
		// set file variable to the read file
		file.value = JSON.parse(reader.result);
		// set file_loaded to true
		file_loaded.value = true;
	};
	reader.onerror = function () {
		console.log(reader.error);
	};
	// close the modal
	showModal.value = false;
}

// add a watcher to selected_page
watch(selected_page, (newVal, oldVal) => {
	const newValues = har_lib.filterEntriesByPage(file.value.log.entries, newVal)
	display_entries.value = newValues
})


// ONLY IN DEVELOPMENT
// import localhost from '../test_data/localhost.json';
// file.value = localhost;
// file_loaded.value = true;

// // if config.autoSelectFirstPage is true, select the first page
// if (config.value.autoSelectFirstPage) {
//     selected_page.value = file.value.log.pages[0].id
// }
</script>