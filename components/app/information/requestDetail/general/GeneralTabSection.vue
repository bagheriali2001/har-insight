<template>
    <div class="overflow-y-auto h-full w-full">
        <GeneralFirstSection :data="data" />
    </div>
</template>

<script setup>
import GeneralFirstSection from './GeneralInfotSection.vue'

const props = defineProps({
    data: Object,
});
</script>