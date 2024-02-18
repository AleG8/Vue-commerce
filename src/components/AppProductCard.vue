<template>
	<div class="card">
		<figure>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_RW29RU4A3HU_4StrgSjjnl-wOWtMTM6KmvgnLlpQTxQ7TBQQx3CcN_8P-J7_h6nSAc&usqp=CAU" alt="">
		</figure>
		<section class="info">
			<h4 class="name">{{ dataProduct.name }}</h4>
			<p class="price">{{ dataProduct.price }} <span class="currency">$</span> </p>
			<p class="stock">
				{{ !inStock ? 'Out stock' : 'Available' }}
			</p>
		</section>
	</div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
	dataProduct: {required: true}
})

const inStock = computed(()=> props.dataProduct.stock > 0)
const colorStock = computed(() => inStock.value ? 'green' : 'rgb(180, 1, 1)')

</script>
<style scoped>
.card{
	width: 20rem;
	height: 20rem;
	border-radius: 0.5rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
	overflow: hidden;
}

.card figure{
	width: 100%;
	height: 65%;
	overflow: hidden;
}

.card figure img{
	width: 100%;
	height: 100%;
}
.info{
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	height: 35%;
	width: 100%;
	padding-left: 1.5rem;
	padding-top: 0.8rem;
}

.info h4{
	letter-spacing: 0.15rem;
}

.info .price{
	font-size: 2rem;
}

.price .currency{
	color: var(--green-color)
}

.info .stock{
	color: v-bind(colorStock);
	text-align: right;
	font-size: 1.2rem;
	position: absolute;
	bottom: 10px;
	right: 20px;
	font-weight: bold;
	letter-spacing: 0.1rem;
	border-bottom: 1px solid v-bind(colorStock);
}

</style>