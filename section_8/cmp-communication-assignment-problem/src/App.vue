<template>
	<div>
		<!-- TODO -->
		<h1>App</h1>
		<user-data @new-user="addNewUser"></user-data>
		<active-user v-for="user in users" :user="user" :key="user.id"></active-user>

	</div>
</template>

<script>
export default {
	data: () => ({
		users: [
			{ id: 'john-1', name: 'John', age: 25 },
			{ id: 'jane-2', name: 'Jane', age: 24 },
		],
	}),
	methods: {
		addNewUser(newUser) {
			this.users.push({
				id: newUser.name.toLowerCase() + '-' + this.users.length,
				name: newUser.name,
				age: newUser.age
			});
		}
	}
};
</script>
