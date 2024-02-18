<template>
	<button class="app-button" :type="type">
		<slot></slot>
	</button>
</template>
<script setup>
defineProps({
	w: {require: true},
	h: {require: true},
	type: String
})
</script>
<style scoped>
button{
	width: v-bind(w);
	height: v-bind(h);
	background-color: var(--green-color);
	border-radius: 5px;
	border: none;
}
</style>
