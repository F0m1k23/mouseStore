<script setup>
// Импорт стора корзины (Pinia)
import { useCartStore } from "../store/cart";
// Инициализируем стор — он содержит cartItems, totalPrice и методы управления
const cartStore = useCartStore();
</script>
<template>
  <section>
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div v-if="cartStore.cartItems.length > 0" class="mx-auto max-w-3xl">
        <header class="text-center">
          <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
        </header>
        <div class="mt-8">
          <ul class="space-y-4">
            <li
              v-for="item in cartStore.cartItems"
              :key="item.id"
              class="flex items-center gap-4"
            >
              <!-- Превью продукта -->
              <img
                :src="item.images?.[0]"
                :alt="item.name"
                class="w-16 h-16 rounded-sm object-cover"
              />

              <!-- Название и цена -->
              <div class="flex-1">
                <h3 class="text-sm text-gray-900">{{ item.name }}</h3>
                <dl class="mt-0.5 space-y-px text-[12px] text-gray-600">
                  <!-- Указываем цену за единицу и подсчет подытога для этого товара -->
                  <div>
                    <dt class="inline">Price:</dt>
                    <dd class="inline font-medium ml-1">${{ item.price }}</dd>
                  </div>
                  <div>
                    <dt class="inline">Subtotal:</dt>
                    <dd class="inline font-bold ml-1">
                      ${{ (item.price * item.quantity).toFixed(2) }}
                    </dd>
                  </div>
                </dl>
              </div>

              <!-- Контролы количества и удаление -->
              <div class="flex items-center gap-2">
                <button
                  @click.prevent="cartStore.decrementQuantity(item.id)"
                  class="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                  aria-label="Decrease"
                >
                  -
                </button>

                <input
                  v-model.number="item.quantity"
                  @change="cartStore.updateQuantity(item)"
                  type="number"
                  min="1"
                  class="h-8 w-14 rounded-sm border border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600"
                />

                <button
                  @click.prevent="cartStore.incrementQuantity(item.id)"
                  class="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                  aria-label="Increase"
                >
                  +
                </button>

                <button
                  @click.prevent="cartStore.removeFromCart(item.id)"
                  class="text-gray-600 transition hover:text-red-600 ml-2"
                  title="Remove item"
                >
                  <span class="sr-only">Remove item</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
          <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
            <div class="w-screen max-w-lg space-y-4">
              <dl class="space-y-0.5 text-sm text-gray-700">
                <div class="flex justify-between text-base font-medium">
                  <dt>Total</dt>
                  <!-- Форматируем сумму с двумя знаками -->
                  <dd>${{ cartStore.totalPrice.toFixed(2) }}</dd>
                </div>
              </dl>
              <div class="flex justify-end">
                <span
                  class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    ></path>
                  </svg>
                  <p class="text-xs whitespace-nowrap">2 Discounts Applied</p>
                </span>
              </div>
              <div class="flex justify-end items-center gap-3">
                <button
                  @click.prevent="cartStore.clearCart()"
                  class="rounded-sm bg-red-100 px-4 py-2 text-sm text-red-700 transition hover:bg-red-200"
                >
                  Clear cart
                </button>

                <a
                  href="#"
                  class="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                >
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-col items-center justify-center gap-4 py-16">
        <div class="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-12 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>

          <h2 class="text-2xl font-bold text-white">Your Cart is Empty</h2>
        </div>

        <p class="text-gray-600">
          It looks like you haven’t added anything to your cart yet.
        </p>
        <router-link
          to="/"
          class="px-6 py-3 rounded-xl bg-teal-600 text-white hover:bg-teal-500 transition cursor-pointer"
        >
          Shop Now
        </router-link>
      </div>
    </div>
  </section>
</template>