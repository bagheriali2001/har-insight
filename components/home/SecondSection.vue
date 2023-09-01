<template>
	<div class="flex flex-col justify-start align-start w-full py-10">
		<div class="flex flex-col justify-center align-center w-[50%] mx-auto my-[5vh]">
			<div class="flex flex-col justify-center mx-auto">
				<h1 class="text-4xl font-bold text-white">
					{{ header_title }}
				</h1>
			</div>
			<div class="flex flex-col justify-center my-2 mx-auto">
				<p class="text-base text-white">
					{{ header_description }}
				</p>
			</div>
		</div>

		<div class="grid grid-cols-1 grid-rows-3 w-[80%] mx-auto mt-[5vh]">
			<div class="row-span-1 row-start-1 h-[100%]">
				<div class="flex flex-row justify-around mx-auto">
					<div class="flex justify-center items-center w-[100%]">
						<TextBlockComponent
							:title="infos[0].title"
							:description="infos[0].description"
						/>
					</div>
					<div class="flex justify-center w-[100%]">
						<ImageComponent
							key="images[0]"
							:image-url="images[0]"
						/>
					</div>
				</div>
			</div>
			
			<div class="row-span-1 row-start-2">
				<div class="flex flex-row justify-between mx-auto">
					<div class="flex justify-center w-[100%]">
						<ImageComponent
							key="images[1]"
							:image-url="images[1]"
						/>
					</div>
					<div class="flex justify-center items-center w-[100%]">
						<TextBlockComponent
							:title="infos[1].title"
							:description="infos[1].description"
						/>
					</div>
				</div>
			</div>
			
			<div class="row-span-1 row-start-3">
				<div class="flex flex-row justify-between mx-auto">
					<div class="flex justify-center items-center w-[100%]">
						<TextBlockComponent
							:title="infos[2].title"
							:description="infos[2].description"
						/>
					</div>
					<div class="flex justify-center w-[100%]">
						<ImageComponent
							key="images[2]"
							:image-url="images[2]"
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col justify-center align-center w-[50%] mx-auto my-36">
			<div class="flex flex-col justify-center my-2 mx-auto">
				<h1 class="text-4xl font-bold text-white">
					{{ footer_title }}
				</h1>
			</div>
			<div class="flex flex-col justify-center my-2 mx-auto">
				<p class="text-base text-white">
					{{ footer_description }}
				</p>
			</div>
			<div class="flex flex-col justify-center my-3 mx-auto">
				<nuxt-link to="/app">
					<button class="bg-white text-black font-bold py-2 px-4 rounded-full">
						Lets go
					</button>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import TextBlockComponent from './TextBlockComponent.vue'
import ImageComponent from './ImageComponent.vue'

const infos = [
	{
		title: `Insight Beyond Compare`,
		description: `At HAR Insight, we empower you to explore, understand, and optimize your web interactions. Our dynamic tools enable you to inspect, visualize, and analyze HAR files exported from browsers. Dive into the depths of performance, loading times, and resource allocation for any web page.`
	},
	{
		title: `Visualize the Unseen`,
		description: `Navigate through the intricacies of network requests, timings, and responses that shape your online experience. Whether you're a developer seeking to refine your website's performance or a curious user deciphering the digital landscape, our platform transforms complex HAR data into user-friendly insights.`
	},
	{
		title: `Analyze and Elevate`,
		description: `Discover bottlenecks, unearth optimization opportunities, and enhance your web journey with HAR Insight. Track the sequence of requests, pinpoint potential errors, and interpret data through customizable charts and graphs. Our mission is to demystify HAR files, offering you a clear path to seizing control of your online encounters.`
	},
];

const images = [
	"../images/insight.jpg",
	"../images/visualize.jpg",
	"../images/analyze.jpg",
]

const header_title = `Unleash the Power of HAR Files`;
const header_description = `Welcome to HAR Insight – your hub for harnessing the true potential of HAR (HTTP Archive) files. Ever wondered what unfolds beneath the surface as you navigate the web? The mystery ends here. HAR files hold the key to unraveling a wealth of insights about your web encounters.`;


const footer_title = `Ready to Dive In?`;
const footer_description = `Join us at HAR Insight and embark on a journey to illuminate the digital realm like never before. Unveil, inspect, and visualize – all with a simple click. Your web experience will never be the same again.`;

</script>


<style scoped>

</style>