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
	meta: [
		{ name: 'title', content: 'Har Insight' },
		{ name: 'type', content: 'website' },
		{ name: 'url', content: 'https://harinsight.net' },
		{ name: 'site_name', content: 'Har Insight' },
		{ name: 'description', content: 'HAR file Analyzer' },
		{ name: 'keywords', content: 'Har Insight, Har Analyze, HAR Analyzer, HAR file, HAR file analyzer, HAR, Insight, Analyze, Visualize' },
		{ name: 'author', content: 'Ali Bagheru' },
		{ name: 'robots', content: 'index, follow' },
		{ name: 'googlebot', content: 'index, follow' },
		{ name: 'google', content: 'notranslate' },
	],
})
</script>