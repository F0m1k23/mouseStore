import { defineStore } from 'pinia'
import { ref, onMounted, watch } from 'vue'
// import { supabase } from '../lib/supabaseClient'
import axios from 'axios'
import { toast } from 'vue-sonner'

// Fallback данные для демонстрации без JSON Server
const fallbackProducts = [
	{
		id: 1,
		name: 'Razer DeathAdder V3 Pro',
		slug: 'razer-deathadder-v3-pro',
		description:
			'Профессиональная игровая мышь с беспроводным подключением и высокоточным сенсором Focus Pro 30K DPI. Идеальна для соревновательных игр и киберспорта.',
		price: 159.99,
		images: [
			'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
		],
		colors: ['Чёрный', 'Белый', 'Мистический синий'],
		isfavorite: false,
		popularity: 95,
		rating: 4.8,
		sensor: 'Focus Pro 30K DPI',
		connection: 'Беспроводная + USB-C',
		weight: '63г',
	},
	{
		id: 2,
		name: 'Logitech G Pro X Superlight',
		slug: 'logitech-g-pro-x-superlight',
		description:
			'Легчайшая беспроводная игровая мышь в мире. Благодаря весу менее 63г обеспечивает невероятную маневренность в играх.',
		price: 149.99,
		images: [
			'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=400',
		],
		colors: ['Чёрный', 'Розовый', 'Белый'],
		isfavorite: true,
		popularity: 98,
		rating: 4.9,
		sensor: 'HERO 25K',
		connection: 'Беспроводная LIGHTSPEED',
		weight: '63г',
	},
	{
		id: 3,
		name: 'SteelSeries Rival 650',
		slug: 'steelseries-rival-650',
		description:
			'Беспроводная игровая мышь с передовым сенсором TrueMove 3+ и системой двойного сенсора для максимальной точности.',
		price: 129.99,
		images: [
			'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
		],
		colors: ['Чёрный', 'Серый'],
		isfavorite: false,
		popularity: 85,
		rating: 4.6,
		sensor: 'TrueMove 3+ (12000 CPI)',
		connection: 'Беспроводная + USB',
		weight: '121г',
	},
]

export const useProductsStore = defineStore('products', () => {
	const products = ref([])
	const product = ref(null)
	const isUsingFallback = ref(false) // Флаг для демо-режима

	// Загружаем все товары (каталог)
	// async function getProducts() {
	// 	try {
	// 		const { data, error } = await supabase.from('products').select('*')
	// 		if (error) throw error
	// 		products.value = data
	// 	} catch (error) {
	// 		console.error('Error loading products:', error.message)
	// 	}
	// }
	async function getProducts() {
		try {
			const data = await axios.get('http://localhost:3000/products')
			products.value = data.data
			isUsingFallback.value = false
			console.log('Products loaded from JSON Server:', data.data.length)
		} catch (error) {
			console.warn('JSON Server not available, using fallback data')
			products.value = fallbackProducts
			isUsingFallback.value = true
			console.log('Fallback products loaded:', fallbackProducts.length)
		}
	}

	// Загружаем один товар по id (если нужно где-то)
	// async function showProductById(id) {
	// 	try {
	// 		const { data, error } = await supabase
	// 			.from('products')
	// 			.select('*')
	// 			.eq('id', id)
	// 			.single()
	// 		if (error) throw error
	// 		product.value = data
	// 	} catch (error) {
	// 		console.error('Error loading product by id:', error.message)
	// 	}
	// }
	async function showProductById(id) {
		try {
			const data = await axios.get(`http://localhost:3000/products/${id}`)
			product.value = data.data
		} catch (error) {
			console.warn('JSON Server not available, searching in fallback data')
			// Поиск в fallback данных
			const foundProduct = fallbackProducts.find(p => p.id === id)
			if (foundProduct) {
				product.value = foundProduct
			} else {
				console.error('Product not found in fallback data:', id)
			}
		}
	}

	// 🔹 Загружаем один товар по slug (для страницы /catalog/:slug)
	// async function showProductBySlug(slug) {
	// 	try {
	// 		const { data, error } = await supabase
	// 			.from('products')
	// 			.select('*')
	// 			.eq('slug', slug)
	// 			.single()
	// 		if (error) throw error
	// 		product.value = data
	// 	} catch (error) {
	// 		console.error('Error loading product by slug:', error.message)
	// 	}
	// }
	async function showProductBySlug(slug) {
		try {
			const data = await axios.get(
				`http://localhost:3000/products?slug=${slug}`
			)
			if (data.data && data.data.length > 0) {
				product.value = data.data[0]
			} else {
				console.error('Product not found by slug:', slug)
			}
		} catch (error) {
			console.warn('JSON Server not available, searching in fallback data')
			// Поиск в fallback данных
			const foundProduct = fallbackProducts.find(p => p.slug === slug)
			if (foundProduct) {
				product.value = foundProduct
			} else {
				console.error('Product not found in fallback data:', slug)
			}
		}
	}

	const isFavorite = async id => {
		// Find the product
		const index = products.value.findIndex(p => p.id === id)
		if (index === -1) return

		const item = products.value[index]
		const newValue = !item.isfavorite

		try {
			// Update in JSON Server
			await axios.patch(`http://localhost:3000/products/${id}`, {
				isfavorite: newValue,
			})

			// Update locally
			products.value[index] = { ...item, isfavorite: newValue }

			// Update if the same product is open
			if (product.value && product.value.id === id) {
				product.value.isfavorite = newValue
			}

			// Show toast notification
			if (newValue) toast.success('Added to favorites 💚')
			else toast.info('Removed from favorites ❌')

			console.log(`✅ Product ${id} updated: isfavorite = ${newValue}`)
		} catch (error) {
			console.warn('JSON Server not available, updating locally only')
			// Update locally only when JSON Server is not available
			products.value[index] = { ...item, isfavorite: newValue }

			// Update if the same product is open
			if (product.value && product.value.id === id) {
				product.value.isfavorite = newValue
			}

			// Show toast notification
			if (newValue) toast.success('Added to favorites 💚 (Demo mode)')
			else toast.info('Removed from favorites ❌ (Demo mode)')

			console.log(`✅ Product ${id} updated locally: isfavorite = ${newValue}`)
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
		isUsingFallback,
		getProducts,
		showProductById,
		showProductBySlug,
		isFavorite,
	}
})
