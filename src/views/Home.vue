<template>
	<main id="home">
		<section class="banner">
			<article class="home-text">
				<h1>E-comerce</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo nobis expedita sint quod adipisci excepturi ex dolorem, necessitatibus voluptas labore, cum porro eligendi fuga, at atque a commodi illum harum.</p>
			</article>
			<article class="illustration">
				<img src="/home-svg.svg" alt="Shop illustration">
			</article>
		</section>
		<section class="collage">
			<h3>Trending products</h3>
			<article class="images">
				<AppProductCard
				  v-for="product in trendingProducts"
				  :key="product.id" 
					:dataProduct="product"
					@click="gotoProducts"
					/>
			</article>
		</section>
	</main>
</template>
<script setup>
import AppProductCard from '@/components/AppProductCard.vue';
import { useProductStore } from '@/stores/product.js'
import { useRouter } from 'vue-router';

const router = useRouter()
const $product = useProductStore()
const trendingProducts = $product.getRandomProducts

const gotoProducts = () =>{
	$product.addFilter(['popular', 'order'])
	router.push({name: 'products'})
}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@300;500;700&family=Poppins:wght@100;300;700&display=swap');

.banner{
	width: 100%;
	padding: 0 3rem 0 3rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.banner .home-text {
	font-family: 'Fraunces', serif;
	font-family: 'Poppins', sans-serif;
	width: 35rem;
}

.banner .home-text h1{
	font-size: 5rem;
}

.banner .illustration img{
	width: 45rem;
}

#home .collage{
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	width: 100%;
	padding: 3rem;
}

#home .collage h3{
	font-size: 3rem;
	border-bottom: 5px solid #000;
}

#home .collage .images{
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(
			20rem,
			1fr
		)
	);
	width: 65rem;
	margin-top: 5rem;
	gap: 1rem;
}

.images .card{
	user-select: none;
	cursor: pointer;
	transition: 0.2s;
}

.images .card:hover{
	transform: scale(1.03);
}

</style>