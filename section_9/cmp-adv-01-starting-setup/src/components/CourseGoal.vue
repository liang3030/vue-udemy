<template>
	<section>
		<h2>Your Course Goals</h2>
		<ul>
			<li v-for="goal in goals" :key="goal">
				<!-- props with dash does not work -->
				<slot :item="goal" another="WWw"></slot>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	data() {
		return {
			goals: ['Finish the course', 'Learn Vue!', 'Help other students'],
		};
	},
}
</script>