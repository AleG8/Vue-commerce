<template>
	<div class="car-item">
		<button class="delete">
			<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
			</svg>
		</button>
		<figure>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_RW29RU4A3HU_4StrgSjjnl-wOWtMTM6KmvgnLlpQTxQ7TBQQx3CcN_8P-J7_h6nSAc&usqp=CAU" alt="">
		</figure>
		<h4 class="name">
			Shoe Adidas
		</h4>
		<div class="quantity">
			<input type="number" id="input-qty" min="1" max="10">
		</div>
		<p class="price">100 <span class="currency">$</span> </p>
	</div>
</template>
<script setup>


const props = defineProps({
	dataProduct: {required: true}
})

</script>
<style scoped>
.car-item{
	width: 100%;
	height: 10rem;
	border-radius: 0.5rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
	overflow: hidden;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.car-item .delete{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3.5rem;
	height: 3.5rem;
	background-color: var(--green-color);
	border: none;
	border-radius: 10px;
	transition: 0.1s;
	cursor: pointer;
}

.car-item .delete:active{
	transform: scale(.98);
}

.car-item .delete svg{
	color: #fff;
	width: 2.5rem;
}

.car-item figure{
	width: 8rem;
	height: 8rem;
	overflow: hidden;
	border-radius: 10px;
}

.car-item figure img{
	width: 100%;
	height: 100%;
}

.name{
	font-size: 1.5rem;
	letter-spacing: 0.10rem;
}

.quantity input{
	width: 3.3rem;
	height: 2.2rem;
	border: none;
	border-radius: 0.2rem;
	outline: none;
	margin-left: 1rem;
	text-align: center;
	font-size: 1.4rem;
}

.price{
	font-size: 2rem;
}

.price .currency{
	color: var(--green-color)
}

</style>