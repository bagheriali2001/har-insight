<template>
    <div class="w-screen h-screen gradient-background flex flex-col items-center justify-center">
            <h1 class="text-8xl font-bold text-white mt-32 mb-24">Roadmap</h1>

            <div class="w-[80%] h-[700px]">
                <TimelineComponant :items="timelineData" :elemWidth="350"/>
            </div>
    </div>
</template>

<script setup>
import TimelineComponant from '../components/roadmap/TimelineComponant.vue'

const timelineData = ref([
    { 
        title: 'Phase 1 (The MVP 🤷‍♂️)',
        time: '2023/08 - 2023/09',
        jobs: [
            {
                info: "Visualizing the HAR file",
                done: true
            },
        ],
        done: true
    },
    { 
        title: 'Phase 2 (Unique Features 🤩)',
        time: 'Est 2023/10',
        jobs: [
            {
                info: "Adding better content viewing option",
                done: false
            },
            {
                info: "Search functionality",
                done: false
            },
            {
                info: "Documentation for Search Syntax",
                done: false
            },
            {
                info: "Ability to store your configuration preferences after page reload",
                done: false
            },
        ],
        done: false
    },
    { 
        title: 'Phase 3 (More Features And Privacy 🤫)',
        time: 'Est 2023/11',
        jobs: [
            {
                info: "Adding configuration options (Columns in request table, Sort options, Request type filtering, etc...)",
                done: false
            },
            {
                info: "Implementing Remove secrets functionality",
                done: false
            },
            {
                info: "Adding download option",
                done: false
            },
        ],
        done: false
    },
    { 
        title: 'Phase 4 (The Real Deal 🤯)',
        time: 'Est 2023/12',
        jobs: [
            {
                info: "Implementing back-end for the project",
                done: false
            },
            {
                info: "Ability to store you view configuration on the Back-end",
                done: false
            },
            {
                info: "Implementing uploading and sharing of you HAR files",
                done: false
            },
        ],
        done: false
    },
    { 
        title: 'Phase 5 (Probably abandoned by now ☠️)',
        time: 'Est 2024/01',
        jobs: [
            {
                info: "Reworking the Landing page",
                done: false
            },
            {
                info: "Reworking and improving design of the project",
                done: false
            },
            {
                info: "Timeline view",
                done: false
            },
        ],
        done: false
    },
]);
</script>


<style scoped>
.gradient-background {
    background: rgb(2,0,36);
    background: linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}
</style>