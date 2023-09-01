<template>
    <div class="tabs w-full">
        <a v-for="tab in tabs" :key="tab.id" :class="['tab', 'tab-lifted', {'tab-active': current_tab === tab.id}]" @click="$emit('updateCurrentTab', tab.id)"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="tab.svgPath" /></svg>{{ tab.name }}</a>
    </div>
</template>

<script setup>
const props = defineProps({
  current_tab: String,
  tabs: Array,
});
</script>