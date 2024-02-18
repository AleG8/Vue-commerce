<template>
	<nav>
		<AppLogo />
		<AppSearch/>
		<ul>
			<li>
				<RouterLink :to="{name: 'products'}">
					All Products
				</RouterLink>
			</li>
			<li class="li-car-container">
				<span>5</span>
				<RouterLink :to="{name: 'shop.car'}">
					<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
					</svg>
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>
<script setup>
import AppLogo from '@/components/AppLogo.vue';
import AppSearch from '@/components/AppSearch.vue';

</script>
<style scoped>
nav{
	width: 100%;
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
}
ul{
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 15rem;
	height: 3.7rem;
}

ul li {
	list-style: none;
	text-decoration: none;
}

ul li:nth-child(1) {
	padding: 0.4rem 0.8rem;
	border-radius: 5px;
	background-color: var(--green-color);
	font-weight: bold;
}

.li-car-container{
	position: relative;
	height: 3.2rem;
	width: 3.2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	border-radius: 50%;
	padding-top: 8px;
}

ul li span{
	position: absolute;
	top: -6px;
	font-size: 20px;
	user-select: none;
	z-index: -1;
	color: var(--green-color)
}

ul li a{
	text-decoration: none;
	color: #fff;

}

.li-car-container a{
	width: 100%;
	height: 100%;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.3s;
}

.li-car-container a:hover{
	transform: skew(10deg)
}


.li-car-container a svg{
	width: 30px;
	margin: 0;
	color: var(--green-color)
}
</style>