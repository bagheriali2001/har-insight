<template>
    <div class="h-full justify-center items-center overflow-y-auto">
            <PageItemComponent v-for="page in pages" :key="page.id" :page="page" class="w-3/4 my-6" @click="$emit('updateChosenPage', page.id)">
            </PageItemComponent>
    </div>
</template>

<script setup>
import PageItemComponent from "./PageItemComponent.vue"

const props = defineProps({
    pages: Array,
})
</script>