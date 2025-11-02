<script setup>
import { useCartStore } from "../store/cart";
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
              <img
                :src="item.images[0]"
                :alt="item.name"
                class="size-16 rounded-sm object-cover"
              />
              <div>
                <h3 class="text-sm text-gray-900">{{ item.name }}</h3>
                <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt class="inline">Color:</dt>
                    <dd class="inline">{{ cartStore.priceWithQuantity }}</dd>
                  </div>
                  <div>
                    <dt class="inline">Price:</dt>
                    <dd class="inline font-bold">${{ item.price }}</dd>
                  </div>
                </dl>
              </div>
              <div class="flex flex-1 items-center justify-end gap-2">
                <form>
                  <label for="Line1Qty" class="sr-only"> Quantity </label>
                  <input
                    v-model.number="item.quantity"
                    @change="cartStore.updateQuantity(item)"
                    type="number"
                    min="1"
                    class="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-hidden [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </form>
                <button
                  @click.prevent="cartStore.removeFromCart(item.id)"
                  class="text-gray-600 transition hover:text-red-600"
                >
                  <span class="sr-only">Remove item</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
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
                <div class="flex justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd>${{ cartStore.totalPrice }}</dd>
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
                    class="-ms-1 me-1.5 size-4"
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
              <div class="flex justify-end">
                <a
                  href="#"
                  class="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                >
                  Купить сейчас
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
            class="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
            />
          </svg>

          <h2 class="text-2xl font-bold text-gray-900">Корзина</h2>
        </div>

        <p class="text-gray-600">
          Похоже, вы еще не добавили ничего в корзину.
        </p>
        <router-link
          to="/"
          class="rounded-sm bg-yellow-400 px-5 py-3 text-sm text-white transition hover:bg-yellow-500"
        >
          Shop Now
        </router-link>
      </div>
    </div>
  </section>
</template>