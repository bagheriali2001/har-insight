<template>
	<div style="background: #0177B6;">
		<first-section />
		<second-section />
		<FooterComponent />
	</div>
</template>

<script setup>
import FirstSection from '../components/home/FirstSection.vue';
import SecondSection from '../components/home/SecondSection.vue';
import FooterComponent from '../components/home/FooterComponent.vue';

useHead({
	title: 'Har Insight',
})
useSeoMeta({
	title: 'Har Insight',
	type: 'website',
	url: 'https://harinsight.net',
	site_name: 'Har Insight',
	description: 'HAR file Analyzer',
	keywords: 'Har Insight, Har Analyze, HAR Analyzer, HAR file, HAR file analyzer, HAR, Insight, Analyze, Visualize',
	robots: 'index, follow',
	googlebot: 'index, follow',
	google: 'notranslate',
})

</script>