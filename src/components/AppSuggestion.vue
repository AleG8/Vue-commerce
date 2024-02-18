<template>
	<ul>
		<li v-for="result in resultFound" :key="result.id" @click="$emit('select-suggestion', result)">
			{{ result.name }}
		</li>
	</ul>
</template>
<script setup>
import { computed } from 'vue'
import { useProductStore } from '@/stores/product.js'

defineEmits("select-suggestion")

const { getManyProductsByPattern } = useProductStore();

const props = defineProps({
	pattern: String
});

const resultFound = computed(()=> getManyProductsByPattern(props.pattern));

</script>
<style scoped>

ul{
	background-color: #fff;
}

li{
	list-style: none;
	padding: 0.3rem 0;
	padding-left: 0.5rem;
}

li:hover{
	background-color: var(--second-color);
	cursor: pointer;
}

</style>