<template>
	<div class="container">
		<div class="controls">
			<input type="search" placeholder="Search product..." v-model="pattern">
			<button class="btn-container" @click="onSearch">
				<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
				</svg>
			</button>
		</div>
		<AppSuggestion :pattern="pattern" @select-suggestion="onSelect"/>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import AppSuggestion from './AppSuggestion.vue';
import { useProductStore } from '@/stores/product';
import { useRouter } from 'vue-router';

const { getOneProduct } = useProductStore()
const router = useRouter()
const pattern = ref("")

const onSearch = () =>{
	let product = getOneProduct(pattern.value)
	if(product) {
		pattern.value = ""
		return router.push({name: 'single.product', params: {productId: product.id}})
	}
	alert("No exists that product!")
}

const onSelect = (product) => {
	pattern.value = product.name
	onSearch()
}

</script>
<style scoped>
.container{
	position: relative;
	width: 25rem;
	height: 2.9rem;
  color: #000;
	background-color: transparent;
	border-radius: 5px;
	transition: 0.5s;
}

.container:focus{
	border-color: #45B39D;
}

.controls{
	display: flex;
	border: 1px solid red;
	border: 1px solid green;
}

input{
	background-color: #fff;
	padding: 10px; 
	font-size: 15px; 
	outline: none;
	border: none;
	height: 100%;
	width: 85%;
}

.btn-container{
	width: 15%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--green-color);
	border: none;
	cursor: pointer;
}

svg{
	width: 25px;
}

</style>