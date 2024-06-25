<template>
	<dialog open>
		<h2>Error!</h2>
		<slot></slot>
	</dialog>
</template>

<style scoped>
dialog {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid #ccc;
	border-radius: 6px;
	padding: 1rem;
	margin: 1rem;
}
</style>