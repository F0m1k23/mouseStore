import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { toast } from 'vue-sonner'
export const useCartStore = defineStore('cart', () => {
	const cartItems = ref([])
	function addToCart(product) {
		const existing = cartItems.value.find(p => p.id === product.id)
		if (existing) {
			existing.quantity++
			toast.success(
				`Количество ${product.name} увеличено до ${existing.quantity} 🛒`
			)
		} else {
			cartItems.value.push({ ...product, quantity: 1 })
			toast.success(`${product.name} добавлен в корзину 🛒`)
		}
	}

	function removeFromCart(id) {
		cartItems.value = cartItems.value.filter(p => p.id !== id)
		toast.success(`Товар удален из корзины 🛒`)
	}

	// 🟢 Обновление количества
	// Обновление количества элемента в корзине по объекту
	function updateQuantity(product) {
		const item = cartItems.value.find(p => p.id === product.id)
		if (!item) return
		// Защита от некорректных значений
		if (!Number.isFinite(product.quantity) || product.quantity < 1) {
			item.quantity = 1
		} else {
			item.quantity = Math.floor(product.quantity)
		}
		// Пересоздаем массив, чтобы реактивность UI гарантированно отреагировала
		cartItems.value = [...cartItems.value]
	}

	// Увеличение количества по id
	function incrementQuantity(id) {
		const item = cartItems.value.find(p => p.id === id)
		if (item) {
			item.quantity++
			cartItems.value = [...cartItems.value]
		}
	}

	// Уменьшение количества по id (минимум 1)
	function decrementQuantity(id) {
		const item = cartItems.value.find(p => p.id === id)
		if (item) {
			item.quantity = Math.max(1, item.quantity - 1)
			cartItems.value = [...cartItems.value]
		}
	}

	// Очистить корзину полностью
	function clearCart() {
		cartItems.value = []
		toast.success('Корзина очищена 🧹')
	}

	// 💰 Общая сумма (reactive)
	const totalPrice = computed(() =>
		cartItems.value.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
	)
	// Сохранение/загрузка корзины в localStorage
	watch(
		cartItems,
		newVal => {
			try {
				localStorage.setItem('cart', JSON.stringify(newVal))
			} catch (e) {
				console.warn('Не удалось сохранить корзину в localStorage', e)
			}
		},
		{ deep: true }
	)
	// Попытка загрузить сохранённую корзину при инициализации стора
	try {
		const savedCart = localStorage.getItem('cart')
		if (savedCart) {
			cartItems.value = JSON.parse(savedCart)
		}
	} catch (e) {
		console.warn('Не удалось прочитать cart из localStorage', e)
	}
	return {
		cartItems,
		totalPrice,
		addToCart,
		removeFromCart,
		updateQuantity,
		incrementQuantity,
		decrementQuantity,
		clearCart,
	}
})
