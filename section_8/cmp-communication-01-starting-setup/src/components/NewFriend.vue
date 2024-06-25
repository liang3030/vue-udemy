<template>
	<!-- try to remember how to use it. not set click event in button -->
	<form @submit.prevent="onSubmitForm">
		<div>
			<label for="name">Name</label>
			<input type="text" id="name" required v-model="contact.name">
		</div>
		<div>
			<label for="phone">Phone</label>
			<input type="tel" id="phone" required v-model="contact.phone">
		</div>
		<div>
			<label for="email">Email</label>
			<input type="email" id="email" required v-model="contact.email">
		</div>
		<div>
			<button type="submit">Add Friend</button>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			contact: {
				name: "",
				phone: "",
				email: "",
			},
		}
	},
	emits: {
		"add-friend": function (contact) {
			if (contact.name && contact.phone && contact.email) {
				return true;
			}
			return false;
		}
	},
	methods: {
		onSubmitForm() {
			this.$emit("add-friend", { ...this.contact });
		}
	}
};

</script>