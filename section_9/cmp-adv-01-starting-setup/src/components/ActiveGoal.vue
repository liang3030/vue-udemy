<template>
	<!-- in vue2, one component should only have one root element. -->
	<!-- in vue3, it is removed, it is called fragment : different from react -->
	<h3>Active Goal</h3>
	<input type="text" ref="goal">
	<button @click="validateInput">Set Goal</button>
	<!-- teleport is similar as react portal.-->
	<!-- It use `to` (same as css selector) to indicate where does this component insert-->
	<teleport to='body'>
		<error-alert v-if="isErrorInput">
			<h3> Error in ActiveGoal! </h3>
			<p>Please enter a valid goal!</p>
			<button @click="confirmError">OK</button>
		</error-alert>
	</teleport>
</template>


<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
	components: {
		ErrorAlert
	},
	data() {
		return {
			isErrorInput: false
		}
	},
	methods: {
		validateInput() {
			const value = this.$refs.goal.value;
			if (value.trim() === '') {
				this.isErrorInput = true;
				return;
			}
		},
		confirmError() {
			this.isErrorInput = false;
		}
	}
};
</script>