import { defineStore } from 'pinia'
import { ref, onMounted, watch } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { toast } from 'vue-sonner'
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

	const isFavorite = async id => {
		// Find the product
		const index = products.value.findIndex(p => p.id === id)
		if (index === -1) return

		const item = products.value[index]
		const newValue = !item.isfavorite

		// Update locally
		products.value[index] = { ...item, isfavorite: newValue }

		// Update if the same product is open
		if (product.value && product.value.id === id) {
			product.value.isfavorite = newValue
		}

		// Show toast notification
		if (newValue) toast.success('Added to favorites 💚')
		else toast.info('Removed from favorites ❌')

		// Save changes in Supabase
		const { error } = await supabase
			.from('products')
			.update({ isfavorite: newValue })
			.eq('id', id)

		if (error) {
			console.error('Error updating favorite:', error.message)
			toast.error('Failed to update product ⚠️')
		} else {
			console.log(`✅ Product ${id} updated: isfavorite = ${newValue}`)
		}
	}

	// Загружаем список при монтировании
	onMounted(() => {
		getProducts()
		const storedProducts = localStorage.getItem('products')
		if (storedProducts) {
			products.value = JSON.parse(storedProducts)
		}
	})
	// Сохраняем список в localStorage при изменении
	watch(products, () => {
		localStorage.setItem('products', JSON.stringify(products.value))
	})

	return {
		products,
		product,
		getProducts,
		showProductById,
		showProductBySlug,
		isFavorite,
	}
})
