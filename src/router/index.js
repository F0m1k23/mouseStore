import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cart from '../pages/Cart.vue'
import About from '../pages/About.vue'
import Contacts from '../pages/Contacts.vue'
import Catalog from '../pages/Catalog.vue'
import Item from '../pages/Item.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/cart',
			name: 'Cart',
			component: Cart,
		},
		{
			path: '/about',
			name: 'About',
			component: About,
		},
		{
			path: '/contacts',
			name: 'Contacts',
			component: Contacts,
		},
		{
			path: '/catalog',
			name: 'Catalog',
			component: Catalog,
		},
		{
			path: '/catalog/:slug',
			name: 'CatalogItem',
			component: Item,
			props: true,
		},
	],
})
export default router
