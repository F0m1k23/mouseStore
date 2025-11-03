import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

export const useProductsStore = defineStore('products', () => {
	const products = ref([])
	const product = ref(null)

	// Загружаем все товары (каталог)
	async function getProducts() {
		try {
			const { data, error } = await supabase.from('products').select('*')
			if (error) throw error
			products.value = data
		} catch (error) {
			console.error('Error loading products:', error.message)
		}
	}

	// Загружаем один товар по id (если нужно где-то)
	async function showProductById(id) {
		try {
			const { data, error } = await supabase
				.from('products')
				.select('*')
				.eq('id', id)
				.single()
			if (error) throw error
			product.value = data
		} catch (error) {
			console.error('Error loading product by id:', error.message)
		}
	}

	// 🔹 Загружаем один товар по slug (для страницы /catalog/:slug)
	async function showProductBySlug(slug) {
		try {
			const { data, error } = await supabase
				.from('products')
				.select('*')
				.eq('slug', slug)
				.single()
			if (error) throw error
			product.value = data
		} catch (error) {
			console.error('Error loading product by slug:', error.message)
		}
	}

	// Загружаем список при монтировании
	onMounted(() => {
		getProducts()
	})

	return {
		products,
		product,
		getProducts,
		showProductById,
		showProductBySlug,
	}
})
