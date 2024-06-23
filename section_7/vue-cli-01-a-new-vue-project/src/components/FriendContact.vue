<template>
	<li>
		<h2>{{ friend.name }}</h2>
		<button @click="toggle">{{isAvailable? 'Hide': 'Show'}}</button>
		<ul v-if="isAvailable">
			<li>
				<strong>Age: </strong>
				{{ friend.age }}
			</li>
			<li>
				<strong>Phone: </strong>
				{{ friend.phone }}
			</li>
			<li>
				<strong>Email: </strong>
				{{ friend.email }}
			</li>
		</ul>
	</li>
</template>

<script>
export default {
	data() {
		return {
			isAvailable: true,
			friend: 
				{ name: 'Max', age: 27, id: 'Max', email: 'max@gmail.com', phone: '0123 345 234' },
		}
	},
	methods: {
		toggle() {
			this.isAvailable = !this.isAvailable;
		}
	}
}
</script>