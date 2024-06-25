<template>
	<form @submit.prevent="addUser">
		<label for="name">Name:</label>
		<input type="text" id="name" v-model="name">
		<label for="age">Age:</label>
		<input type="number" id="age" v-model="age">
		<button type="submint">Add User</button>
	</form>
</template>

<script>
export default {
	data: () => ({
		name: '',
		age: 0
	}),
	emits: ['new-user'],
	methods: {
		addUser() {
			this.$emit('new-user', {
				name: this.name,
				age: this.age
			});
			this.name = '';
			this.age = 0;
		}
	}
}
</script>