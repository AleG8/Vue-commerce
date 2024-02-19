<template>
	<div class="card-large">
		<section class="header">
			<button @click="gotoProducts">
				<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"></path>
				</svg>
			</button>
			<h4 class="name">{{ product.name }}</h4>
		</section>
		<form @submit.prevent="onSubmit" class="form-info">
			<figure>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_RW29RU4A3HU_4StrgSjjnl-wOWtMTM6KmvgnLlpQTxQ7TBQQx3CcN_8P-J7_h6nSAc&usqp=CAU" alt="">
			</figure>
			<section class="info">
				<p class="price">{{ product.price }} <span class="currency">$</span> </p>
				<div class="quantity">
					<label for="qty-product">Cantidad = </label>
					<input type="number" id="qty-product" v-model="productQuantity" min="1" :max="product.stock">
					<button type="button" @click="productQuantity++">
						<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
						</svg>
					</button>
				</div>
				<AppButton w="7rem" h="3rem" type="submit">
					Add to Car
				</AppButton>
			</section>
		</form>
	</div>
</template>
<script setup>
import AppButton from './AppButton.vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '@/stores/product';
import { useCarStore } from '@/stores/car.js'
import { ref } from 'vue'

const productQuantity = ref(1)
const route = useRoute()
const router = useRouter()
const productId = parseInt(route.params.productId)

const { addProductToCar } = useCarStore()
const { getProductById } = useProductStore()
const product = getProductById(productId)

const gotoProducts = () => router.push({name: 'products'})

const onSubmit = () =>{
	addProductToCar(product, productQuantity.value)
	productQuantity.value = 0
	setTimeout(()=> gotoProducts(), 100)
}


</script>
<style scoped>
.card-large{
	position: relative;
	width: 45rem;
	height: 30rem;
	border-radius: 0.5rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
	overflow: hidden;
	padding: 1.5rem;
}

.card-large .header button{
	position: absolute;
	top: 1.3rem;
	left: 2rem;
	width: 3rem;
	height: 2.5rem;
	border: none;
	border-radius: 0.2rem;
	background-color: var(--green-color);
	color: #fff;
	transition: 0.2s;
	cursor: pointer;
}

.card-large .header button:hover{
	cursor: pointer;
	transform: scale(1.04);
}

.card-large .header button svg{
	width: 20px;
}

.card-large .header h4{
	text-align: center;
	font-size: 2rem;
}

.form-info{
	display: flex;
	align-items: center;
	height: 20rem;
	margin-top: 2rem;
}

.form-info figure{
	position: relative;
}
.form-info figure img{
	width: 20rem;
}

.info{
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	gap: 4rem;
}
.info .price{
	letter-spacing: 0.10rem;
	font-size: 3rem;
	border-bottom: 5px solid #000;
}

.price .currency{
	color: var(--green-color)
}

.info .quantity{
	display: flex;
	align-items: center;
	gap: .8rem;
}

.info .quantity input{
	width: 5rem;
	height: 2rem;
	border: none;
	border-radius: 0.2rem;
	outline: none;
	font-size: 1rem;
	text-align: center;
}

.info .quantity button{
	width: 2rem;
	height: 2rem;
	border: none;
	border-radius: 0.2rem;
	background-color: var(--green-color);
	color: #fff;
	transition: 0.2s;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
.info .quantity button svg{
	width: 1.2rem;
}



.info button{
	color: #fff;
	transition: 0.2s;
	font-size: 1rem;
}

.info button:hover{
	cursor: pointer;
	transform: scale(1.04);
} 

</style>