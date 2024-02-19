import { defineStore } from "pinia";
import dataProducts from '@/data_products.json'



export const useProductStore = defineStore("products", {
	state: () => ({
		allProducts: dataProducts.products,
		filters: []
	}),
	getters: {
		filteredProducts: (state)=>{
			if (!state.filters.length) return state.allProducts
			const minPrice = state.filters.find(f => f[1] === 'min')
			const maxPrice = state.filters.find(f => f[1] === 'max')
			const order = state.filters.find(f => f[1] === 'order')

			let products = state.allProducts.filter(({price})=> {
				const min = minPrice ? minPrice[0] : false
				const max = maxPrice ? maxPrice[0] : false

				if (!min && !max) return true
				if (min && max) return price >= min && price <= max
				if (min && !max) return price >= min
				if (!min && max) return price <= max
			})

			if (order) {
				products = products.sort((a, b) => {
					const options = {
						'lower-price': a.price - b.price,
						"higher-price": b.price - a.price,
						"popular": b.popularity - a.popularity,
						"no-popular": a.popularity - b.popularity,
					}
					return options[order[0]]
				});
			}

			return products 
		},
		getRandomProducts: (state) => {
			const randomIndexes = Array.from({ length: 6 }, () => Math.floor(Math.random() * state.allProducts.length));
			const randomProducts = randomIndexes.map(index => state.allProducts[index]).filter(product => product); // Filter out undefined elements
			return randomProducts;
		},
		activeFilter: (state) =>{
			const order = state.filters.find(f => f[1] === 'order')
			const min = state.filters.find(f => f[1] === 'min')
			const max = state.filters.find(f => f[1] === 'max')
			return {
				order: order ? order[0] : "",
				min: min ? min[0] : 0,
				max: max ? max[0] : 0
			}
		}
	},
	actions:{
		addFilter(){
			this.filters = []
			this.filters.push(...arguments)
		},
		getProductById(id){
			return this.allProducts.find(p => parseInt(p.id) === id)
		},
		getManyProductsByPattern(pattern){
			if(!pattern.length) return []
			return this.allProducts.filter(p => p.name.toLowerCase().includes(pattern.toLowerCase()))
		},
		getOneProduct(pattern){
			if(!pattern.length) return ""
			return this.allProducts.find(p => p.name.toLowerCase().includes(pattern.toLowerCase())) || ""
		}
	}
})
