<template>
	<div class="container-table">
		<button v-if="products.length" v-for="(product) in products" @click="$emit('select-product', product)">
			<AppProductCard :key="product.id" :dataProduct="product" />
		</button>
	</div>
</template>
<script setup>
import AppProductCard from './AppProductCard.vue';

const props = defineProps({
	products: {required: true}
})

</script>
<style scoped>
.container-table{
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(
			20rem,
			1fr
		)
	);
	gap: 1rem;
	width: 100%;
}

.container-table button{
	width: 20rem;
	border: none;
	cursor: pointer;
	transition: 0.2s;
}

.container-table button:hover{
	transform: scale(1.015);
}
</style>