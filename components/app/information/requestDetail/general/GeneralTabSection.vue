<template>
    <div class="overflow-y-auto overflow-x-hidden h-full w-full">
        <GeneralFirstSection :data="data" />
    </div>
</template>

<script setup>
import GeneralFirstSection from './GeneralInfoSection.vue'

const props = defineProps({
    data: Object,
});
</script>