<template>
	<footer>
		<address>
			<span>
				Made by Alejandro
			</span>
			<span>
				&copy {{ new Date().getFullYear() }} Ale-commerce
			</span>
		</address>
	</footer>
</template>
<style scoped>
footer{
	width: 100%;
	height: 4rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.10);
	display: flex;
	align-items: center;
	justify-content: center;
}

address span{
	margin-right: 1.5rem;
}

address span:nth-child(1){
	background-color: var(--green-color);
	color: #fff;
	display: inline-block;
	width: 11rem;
	height: 1.9rem;
	border-radius: 0.2rem;
	text-align: center;
	font-weight: bold;
}
</style>