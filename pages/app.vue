<template>
    <Teleport to="body">
        <LoadFileModal :show="showModal" @close="showModal = false">
            <template #header>
                <h1 class="text-xl font-bold">Please choose a HAR file to load</h1>
            </template>

            <template #body>
                <form>
                    <div class="flex flex-row justify-center items-center">
                        <input type="file" class="file-input file-input-bordered file-input-primary w-full max-w-sm mx-4" id="formFile" accept=".har, .HAR" @change="readFile"/>
                    </div>
                </form>
            </template>
        </LoadFileModal>
    </Teleport>
    <Teleport to="body">
        <ConfigModalComponent :show="showConfigModal" @close="showConfigModal = false"></ConfigModalComponent>
    </Teleport>

    <div class="flex flex-col h-screen" v-if="!file_loaded">
        <div class="flex flex-col justify-center items-center h-full">
            <div class="flex flex-col w-[70%] h-32 my-6">
                <HeaderComponent />
            </div>
            <div class="flex flex-col w-3/4 my-6">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[30%] mx-auto" @click="showModal = true">
                    Open HAR File
                </button>
            </div>
        </div>
    </div>


    <div class="flex flex-col h-screen overflow-y-hidden w-full" v-else>
        <div class="flex flex-col justify-center items-center h-full w-full">
            <GeneralInformationComponent :version="file.log.version" :creator="file.log.creator" :browser="file.log.browser" :comment="file.log.comment" class="top-0 mx-4 my-[1%] h-[6%]">
                <template #new_file_load>
                    <div class="flex w-full justify-center items-center">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-[85%]" @click="showModal = true">
                            Load new HAR File
                        </button>
                    </div>
                </template>
                <template #config_button>
                    <div class="flex w-full justify-center items-center">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-[85%]" @click="showConfigModal = true">
                            Show Configurations
                        </button>
                    </div>
                </template>
            </GeneralInformationComponent>
            <!-- <div class="divider"></div> -->
            <div class="flex flex-row w-full h-[92%] mb-4 overflow-x-scroll pr-4">
                <div class="flex flex-col min-w-[300px] w-[300px] h-full mb-4">
                    <PageListComponent :pages="file.log.pages" class="h-full" @updateChosenPage="selected_page = $event"/>
                </div>
                <!-- <div class="divider divider-vertical h-full w-[1px] bg-sky-500 mb-4 mt-0"></div> -->
                <div class="flex flex-col min-w-[300px] w-[300px] h-full mb-4">
                    <RequestListComponent :requests="display_entries" class="h-full" @updateChosenRequest="selected_request = $event"/>
                </div>
                <!-- <div class="divider divider-vertical h-full w-[1px] bg-sky-500 mb-4 mt-0" v-if="selected_request"></div> -->
                <div class="flex flex-col min-w-[1800px] w-[1800px] h-full me-4" v-if="selected_request">
                    <RequestDetailCard :request="selected_request" :key="selected_request.connection+selected_request.url+selected_request.startedDateTime" class="h-full"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeaderComponent from '../components/app/HeaderComponent.vue';
import LoadFileModal from '../components/app/LoadFileModal.vue';
import GeneralInformationComponent from '../components/app/information/GeneralInformationComponent.vue';
import ConfigModalComponent from '../components/app/information/ConfigModalComponent.vue';
import PageListComponent from '../components/app/information/pageList/PageListComponent.vue';
import RequestListComponent from '../components/app/information/requestList/RequestListComponent.vue';
import RequestDetailCard from '../components/app/information/RequestDetailCard.vue';

import har_lib from '../lib/har_analyze.js'

const config = useConfig();

const showModal = ref(false);
const showConfigModal = ref(false);
let file = ref(null)
let file_loaded = ref(false)
let display_entries = ref(null)
let selected_page = ref(null)
let selected_request = ref(null)

function readFile(e) {
    // console.log("reading a har file: ", e.target.files[0]);
    // read as json
    let reader = new FileReader();
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
// load a default file from project_root/test_data/localhost.har
// import localhost from '../test_data/app.landin.ir.json';
// import localhost from '../test_data/localhost.json';
// file.value = localhost;
// file_loaded.value = true;

// // if config.autoSelectFirstPage is true, select the first page
// if (config.value.autoSelectFirstPage) {
//     selected_page.value = file.value.log.pages[0].id
// }
</script>