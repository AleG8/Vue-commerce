<template>
	<article class="app-filter" >
		<form class="filter-form" @submit.prevent="onSubmit" :class="{ noSelect: route.params.hasOwnProperty('productId') }">
			<h2>Filters</h2>
			<section class="container">
				<div class="price-range">
					<h3>Precio:</h3>
					<input type="number" name="price-min" class="input min" v-model="minPrice">
					<span>-</span>
					<input type="number" name="price-max" class="input max" v-model="maxPrice">
				</div>
				<div class="select-container">
					<label for="order">Order by:</label>
					<select v-model="orderBy" id="order" class="input select">
						<option value="lower-price">Lower Price</option>
						<option value="higher-price">High Price</option>
						<option value="popular">Popular</option>
						<option value="no-popular">No popular</option>
					</select>
				</div>
				<div class="submit-container">
					<AppButton w="6rem" h="3rem" :type="'submit'">
						Search
					</AppButton>
				</div>
			</section>
		</form>
	</article>
</template>
<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/product';
import { useRoute } from 'vue-router';
import AppButton from './AppButton.vue';

const route = useRoute()
const $product = useProductStore()
const { addFilter } = $product

const {order, min, max} = $product.activeFilter

const orderBy = ref(order)
const minPrice = ref(min)
const maxPrice = ref(max)

const onSubmit = () =>{
	const selected = [[orderBy.value, 'order'], [minPrice.value, 'min'], [maxPrice.value, 'max']].filter(f => f[0])
	addFilter(...selected)
}

</script>
<style scoped>
.filter-form{
	position: relative;
  min-width: 100px;
  min-height: 350px;
	width: 20rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  z-index: 100;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);
  padding: 20px 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.noSelect{
	opacity: 0.4;
	pointer-events: none
}

.filter-form h2{
	position: absolute;
	top: 2.5rem;
}

.filter-form .container {
	width: 100%;
	height: 8rem;
	display: flex;
	flex-direction: column;
}

.price-range{
	display: flex;
}

.price-range h3{
	margin-right: 0.5rem;
	font-size: 1.3rem;
}

.price-range span{
	margin: 0 0.5rem;
	font-weight: bold;
}

.input{
	width: 5rem;
	border: none;
	border-radius: 0.2rem;
	outline: none;
}

.input:focus{
	border: 1px solid var(--green-color);
}

.select-container label{
	font-weight: bold;
	margin-right: 1rem;
	font-size: 1.3rem;
}

.container div{
	margin-top: 2rem;
}

.input.select{
	width: 8rem;
	height: 1.7rem;
}

.app-button{
	color: #fff;
	font-size: 1.15rem;
	font-weight: bold;
	letter-spacing: 0.1rem;
	cursor: pointer;
	transition: 0.1s;
}

.app-button:active{
	transform: scale(0.98);
}

.submit-container{
	align-self: center;
}

</style>