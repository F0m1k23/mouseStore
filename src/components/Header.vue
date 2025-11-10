<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useCartStore } from "../store/cart";
import { useProductsStore } from "../store/products";

const isOpen = ref(false);
const navRef = ref(null);
const cartStore = useCartStore();
const productsStore = useProductsStore();

function onDocumentClick(e) {
  if (!navRef.value) return;
  if (isOpen.value && !navRef.value.contains(e.target)) {
    isOpen.value = false;
  }
}

onMounted(() => document.addEventListener("click", onDocumentClick));
onBeforeUnmount(() => document.removeEventListener("click", onDocumentClick));

const menuList = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "About", href: "/about" },
  { name: "Contacts", href: "/contacts" },
];
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-gray-900 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm"
  >
    <!-- Демо-режим индикатор -->
    <div
      v-if="productsStore.isUsingFallback"
      class="bg-gradient-to-r from-yellow-500/90 to-orange-500/90 text-white text-center py-2 text-sm font-medium"
    >
      <div class="flex items-center justify-center gap-2">
        <svg
          class="w-4 h-4 animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span
          >🎮 Demo Mode - JSON Server не запущен. Показываем 3 образца
          товара.</span
        >
        <svg
          class="w-4 h-4 animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 sm:px-8">
      <nav ref="navRef" class="flex items-center justify-between py-4">
        <!-- ЛОГО -->
        <router-link
          to="/"
          class="flex items-center gap-2 text-teal-600 dark:text-teal-300 font-bold text-xl tracking-wide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-7 h-7"
          >
            <path
              d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15H11v-2h2v2zm0-4H11V7h2v6z"
            />
          </svg>
          <span>SpeedTech</span>
        </router-link>

        <!-- Десктоп меню -->
        <ul
          class="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium"
        >
          <li
            v-for="link in menuList"
            :key="link.href"
            class="hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200"
          >
            <router-link :to="link.href">{{ link.name }}</router-link>
          </li>
        </ul>

        <!-- Правая часть (мобильная и десктопная корзина) -->
        <div class="flex items-center gap-4">
          <!-- Корзина -->
          <router-link
            to="/cart"
            class="relative text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition-all duration-200 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993
                   1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125
                   1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125
                   0 0 1 5.513 7.5h12.974c.576
                   0 1.059.435 1.119 1.007Z"
              />
            </svg>
            <span
              v-if="cartStore.cartItems.length > 0"
              class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full"
            >
              {{ cartStore.cartItems.length }}
            </span>
          </router-link>

          <!-- Бургер (только на мобилке) -->
          <button
            @click.stop="isOpen = !isOpen"
            class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle Menu"
          >
            <svg
              v-if="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Мобильное меню -->
      <transition name="slide-down">
        <div
          v-if="isOpen"
          class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-b-lg"
        >
          <div
            class="flex flex-col px-4 py-4 gap-2 text-gray-700 dark:text-gray-300 font-medium"
          >
            <router-link
              v-for="link in menuList"
              :key="link.href"
              :to="link.href"
              class="py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              @click="isOpen = false"
            >
              {{ link.name }}
            </router-link>

            <!-- Корзина в мобильном меню -->
            <!-- <router-link
              to="/cart"
              class="flex items-center gap-2 py-2 px-3 mt-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              @click="isOpen = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993
                     1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125
                     1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125
                     0 0 1 5.513 7.5h12.974c.576
                     0 1.059.435 1.119 1.007Z"
                />
              </svg>
              Корзина ({{ cartStore.cartItems.length }})
            </router-link> -->
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
