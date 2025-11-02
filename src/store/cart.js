import { defineStore } from 'pinia'
import { ref, computed, watch, onMounted } from 'vue'
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
	function updateQuantity(product) {
		const item = cartItems.value.find(p => p.id === product.id)
		if (item) {
			if (item.quantity < 1) item.quantity = 1
			const allQuantityProducts = product.quantity * item.price
			console.log('Total quantity in cart:', allQuantityProducts)
			// 🟢 пересоздаем массив, чтобы реактивность точно сработала
			cartItems.value = [...cartItems.value]
		}
	}

	// 💰 Общая сумма (reactive)
	const totalPrice = computed(() =>
		cartItems.value.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
	)
	// 🟢 Сохранение в localStorage
	watch(
		cartItems,
		newVal => {
			localStorage.setItem('cart', JSON.stringify(newVal))
		},
		{ deep: true }
	)
	onMounted(() => {
		const savedCart = localStorage.getItem('cart')
		if (savedCart) {
			cartItems.value = JSON.parse(savedCart)
		}
	})
	return {
		cartItems,
		totalPrice,
		addToCart,
		removeFromCart,
		updateQuantity,
	}
})
