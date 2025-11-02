import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
export const useProductsStore = defineStore('products', () => {
	const products = ref([])
	const product = ref(null)
	async function getProducts() {
		try {
			const { data, error } = await supabase.from('products').select()
			products.value = data
			console.log(data)
		} catch (error) {
			console.log(`Error ${error}`, error)
		}
	}
	const showProduct = async id => {
		try {
			const { data, error } = await supabase
				.from('products')
				.select()
				.eq('id', id)
				.single()
			product.value = data
		} catch (error) {
			console.log(`Error ${error}`, error)
		}
		console.log(id)
		console.log(product.value)
	}
	onMounted(() => {
		getProducts()
	})
	return { products, getProducts, showProduct, product }
})
