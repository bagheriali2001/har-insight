<template>
    <div class="relative w-full h-full overflow-x-auto justify-center items-center z-0">
            <div class="line pl-5 border-t-2 border-solid border-green-600 mt-2" :style="[{'width': `${items.filter(item => item.done).length * elemWidth}px`}]"></div>
            <div class="line pr-5 border-t-2 border-solid border-gray-300 mt-2" :style="[{'width': `${items.filter(item => !item.done).length * elemWidth}px`}, {'left': `${items.filter(item => item.done).length * elemWidth}px`}]"></div>
            
            <div class="flex flex-row justify-center top-[85px] absolute w-100 h-100" :style="[{ left: `${elemWidth/2}px`}]">
                <div
                v-for="(item, index) in items"
                :key="index"
                class="circles-inner flex flex-col justify-center items-center"
                :style="[{ left: `${index * elemWidth}px`}, { width: `${elemWidth}px` }]"
                >
                    <!-- <div class="relative rounded-[50%] w-[30px] h-[30px] mx-auto item-center" :style="[{ 'background-color': item.done ? 'green' : 'gray' }]"></div> -->
                </div>
            </div>

            <div class="flex flex-row justify-center top-[35px] absolute w-100 h-100" :style="[{ left: `${elemWidth/2}px`}]">
                <div
                v-for="(item, index) in items"
                :key="index"
                class="point flex flex-col justify-center items-center"
                :style="[{ left: `${index * elemWidth}px`}, { width: `${elemWidth}px` }]"
                >
                    <h2 class="text-white text-base">{{ item.title }}</h2>
                    <p class="text-gray text-sm mb-1.5">{{ item.time || "NA" }}</p>
                    <div class="relative flex items-center justify-center rounded-[50%] w-[30px] h-[30px] mx-auto item-center mt-2" :class="{ 'bg-emerald-500 shadow-zero': item.done, 'bg-gray-300': !item.done }">
                    <img v-if="item.done" :src="tickIcon" alt="">
                    </div>
                    <div class="card flex flex-col w-[80%] mt-4 h-80 border-2 rounded-lg border-solid bg-white shadow-xl p-4">
                        <p v-for="(job, index) in item.jobs" :key="index" class="text-gray text-sm mb-1.5 text-black">{{ job.done? '✅' : '❌' }} {{ job.info }}</p>
                    </div>
                </div>
            </div>
    </div>
</template>
  
<script setup>
import { defineProps } from 'vue';
import tickIcon from '../../public/icons/Tick-24.svg';

const { items, elemWidth } = defineProps(['items', 'elemWidth']);
</script>
  
<style scoped>
.line {
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    transform: translateY(-50%);
}

.point {
    position: absolute;
    transform: translateX(-50%);
}
  
.circles-inner {
    position: absolute;
    transform: translateX(-50%);
}
</style>
  