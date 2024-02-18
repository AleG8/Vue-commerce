import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/products',
		name: 'products',
		component: ()=> import( '@/views/Products.vue'),
		children: [
			{
				path: ':productId',
				name: 'single.product',
				component: () => import("@/components/AppProductInfo.vue"),
			}
		]
	},
	{
		path: '/shop-car',
		name: 'shop.car',
		component: ()=> import( '@/views/ShopCar.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return savedPosition || { top: 0, behavior: 'smooth' }
	}
})

export default router