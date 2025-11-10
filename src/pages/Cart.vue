<script setup>
// Импорт стора корзины (Pinia)
import { useCartStore } from "../store/cart";
import { useRouter } from "vue-router";
// Инициализируем стор — он содержит cartItems, totalPrice и методы управления
const cartStore = useCartStore();
const router = useRouter();

const goToProduct = (productSlug) => {
  router.push(`/catalog/${productSlug}`);
};
</script>
<template>
  <section
    class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-6 sm:py-12"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div v-if="cartStore.cartItems.length > 0" class="mx-auto max-w-4xl">
        <header class="text-center mb-8 sm:mb-12">
          <div class="inline-flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 5.36A2 2 0 007.3 20h9.4a2 2 0 001.98-1.64L21 13M7 13v6a2 2 0 002 2h8a2 2 0 002-2v-6"
                ></path>
              </svg>
            </div>
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Shopping Cart
            </h1>
          </div>
          <p class="text-gray-400 text-sm sm:text-base">
            {{ cartStore.cartItems.length }} items in your cart
          </p>
        </header>

        <!-- Cart Items -->
        <div class="space-y-3 sm:space-y-4">
          <div
            v-for="item in cartStore.cartItems"
            :key="item.id"
            class="group bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/50"
          >
            <!-- Mobile Layout -->
            <div class="sm:hidden">
              <div class="flex items-start gap-4">
                <!-- Кликабельное изображение -->
                <div
                  class="relative overflow-hidden rounded-xl cursor-pointer flex-shrink-0"
                  @click="goToProduct(item.slug)"
                >
                  <img
                    :src="item.images?.[0]"
                    :alt="item.name"
                    class="w-20 h-20 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl"
                  ></div>
                  <div
                    class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <svg
                      class="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <!-- Информация о товаре -->
                <div class="flex-1 min-w-0">
                  <h3
                    class="text-base font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-teal-600 dark:hover:text-teal-400 transition-colors line-clamp-2"
                    @click="goToProduct(item.slug)"
                  >
                    {{ item.name }}
                  </h3>
                  <div
                    class="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <div class="flex items-center gap-2">
                      <span
                        class="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-xs font-medium"
                      >
                        {{ item.color }}
                      </span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span
                        >Unit:
                        <span class="font-semibold"
                          >${{ item.price }}</span
                        ></span
                      >
                      <span
                        >Subtotal:
                        <span class="font-bold text-teal-600 dark:text-teal-400"
                          >${{ (item.price * item.quantity).toFixed(2) }}</span
                        ></span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- Mobile Controls -->
              <div
                class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <!-- Quantity Controls -->
                <div
                  class="flex items-center bg-gray-100 dark:bg-gray-700 rounded-xl p-1"
                >
                  <button
                    @click.prevent="cartStore.decrementQuantity(item.id)"
                    class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-white dark:hover:bg-gray-600 transition-all"
                    aria-label="Decrease"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 12H4"
                      ></path>
                    </svg>
                  </button>

                  <input
                    v-model.number="item.quantity"
                    @change="cartStore.updateQuantity(item)"
                    type="number"
                    min="1"
                    class="w-12 h-8 bg-transparent text-center text-sm font-medium text-gray-900 dark:text-white border-0 focus:ring-0"
                  />

                  <button
                    @click.prevent="cartStore.incrementQuantity(item.id)"
                    class="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-white dark:hover:bg-gray-600 transition-all"
                    aria-label="Increase"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </button>
                </div>

                <!-- Remove Button -->
                <button
                  @click.prevent="cartStore.removeFromCart(item.id)"
                  class="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all duration-200"
                  title="Remove item"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Desktop Layout -->
            <div class="hidden sm:flex items-center gap-6">
              <!-- Кликабельное изображение -->
              <div
                class="relative overflow-hidden rounded-2xl cursor-pointer flex-shrink-0"
                @click="goToProduct(item.slug)"
              >
                <img
                  :src="item.images?.[0]"
                  :alt="item.name"
                  class="w-24 h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl"
                ></div>
                <div
                  class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
              </div>

              <!-- Информация о товаре -->
              <div class="flex-1 min-w-0">
                <h3
                  class="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  @click="goToProduct(item.slug)"
                >
                  {{ item.name }}
                </h3>
                <div
                  class="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400"
                >
                  <div class="flex items-center gap-2">
                    <span
                      class="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-xs font-medium"
                    >
                      {{ item.color }}
                    </span>
                  </div>
                  <div class="flex items-center gap-4">
                    <span
                      >Unit price:
                      <span class="font-semibold text-gray-900 dark:text-white"
                        >${{ item.price }}</span
                      ></span
                    >
                    <span
                      >Subtotal:
                      <span class="font-bold text-teal-600 dark:text-teal-400"
                        >${{ (item.price * item.quantity).toFixed(2) }}</span
                      ></span
                    >
                  </div>
                </div>
              </div>

              <!-- Quantity Controls -->
              <div class="flex items-center gap-3">
                <div
                  class="flex items-center bg-gray-100 dark:bg-gray-700 rounded-2xl p-1"
                >
                  <button
                    @click.prevent="cartStore.decrementQuantity(item.id)"
                    class="w-8 h-8 flex items-center justify-center rounded-xl text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-white dark:hover:bg-gray-600 transition-all"
                    aria-label="Decrease"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 12H4"
                      ></path>
                    </svg>
                  </button>

                  <input
                    v-model.number="item.quantity"
                    @change="cartStore.updateQuantity(item)"
                    type="number"
                    min="1"
                    class="w-12 h-8 bg-transparent text-center text-sm font-medium text-gray-900 dark:text-white border-0 focus:ring-0"
                  />

                  <button
                    @click.prevent="cartStore.incrementQuantity(item.id)"
                    class="w-8 h-8 flex items-center justify-center rounded-xl text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-white dark:hover:bg-gray-600 transition-all"
                    aria-label="Increase"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      ></path>
                    </svg>
                  </button>
                </div>

                <!-- Remove Button -->
                <button
                  @click.prevent="cartStore.removeFromCart(item.id)"
                  class="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all duration-200"
                  title="Remove item"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div
          class="mt-6 sm:mt-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-white/20 dark:border-gray-700/50"
        >
          <div
            class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6"
          >
            <div class="mb-4 sm:mb-0">
              <h3
                class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white"
              >
                Order Summary
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">
                Taxes and shipping calculated at checkout
              </p>
            </div>
            <div class="text-center sm:text-right">
              <div
                class="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400"
              >
                ${{ cartStore.totalPrice.toFixed(2) }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">Total</div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              @click.prevent="cartStore.clearCart()"
              class="flex-1 py-3 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 font-medium transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
              <span class="text-sm sm:text-base">Clear Cart</span>
            </button>

            <button
              class="flex-1 py-3 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium shadow-lg hover:shadow-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span class="text-sm sm:text-base">Checkout</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Empty Cart -->
      <div
        v-else
        class="flex flex-col items-center justify-center gap-6 py-12 sm:py-16 text-center px-4"
      >
        <div class="relative">
          <div
            class="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center"
          >
            <svg
              class="w-12 h-12 sm:w-16 sm:h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25h3.75c.717 0 1.346.628 1.342 1.353 0 .725-.628 1.353-1.342 1.353H7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div
            class="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-teal-500 rounded-full flex items-center justify-center"
          >
            <svg
              class="w-3 h-3 sm:w-4 sm:h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </div>
        </div>

        <div class="max-w-md">
          <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">
            Your Cart is Empty
          </h2>
          <p class="text-gray-400 mb-6 text-sm sm:text-base">
            Looks like you haven't added any products to your cart yet. Start
            shopping to fill it up!
          </p>
          <router-link
            to="/"
            class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium shadow-lg hover:shadow-xl hover:from-teal-700 hover:to-teal-800 transition-all duration-200"
          >
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
            <span class="text-sm sm:text-base">Start Shopping</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>