<template>
	<section class="container">
		<AppFilter />
		<AppProductTable
		  :products="$product.filteredProducts"
		  v-show="!isActiveProduct"
		  @select-product="productInfo" />
		<RouterView />
	</section>
</template>
<script setup>
import AppFilter from '@/components/AppFilter.vue';
import AppProductTable from '@/components/AppProductTable.vue';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue'
import { useProductStore } from '@/stores/product.js'

defineEmits('select-product')

const $product = useProductStore()
const route = useRoute()
const router = useRouter()
const isActiveProduct = computed(()=> route.params.hasOwnProperty("productId"))

const productInfo = (product) => router.push({ name: 'single.product', params: { productId: product.id } })

</script>
<style scoped>
.container{
	min-height: 100vh;
	display: flex;
	justify-content: stretch;
	align-items: flex-start;
	padding: 2rem;

	gap: 2rem;
}

.card-large{
	margin: 0 auto;
}
</style>