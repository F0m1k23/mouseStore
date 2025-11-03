<script setup>
import ProductCard from "../components/ProductCard.vue";
import { useProductsStore } from "../store/products";
import { useCartStore } from "../store/cart";
import { useRouter } from "vue-router";
const cartStore = useCartStore();

const router = useRouter();
import Hero from "../components/Hero.vue";
import AboutSection from "../components/AboutSection.vue";
import Stats from "../components/Stats.vue";
import Cta from "../components/Cta.vue";
const store = useProductsStore();
const showProduct = (product) => {
  router.push(`/catalog/${product.slug}`);
};
</script>

<template>
  <Hero />

  <!-- Популярные товары секция -->
  <section
    class="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
  >
    <div class="container mx-auto px-4">
      <div class="text-center mb-12 slide-in-left">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Popular <span class="gradient-text">Products</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover our most popular gaming accessories, chosen by thousands of
          gamers
        </p>
      </div>

      <div
        class="grid justify-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        <ProductCard
          v-for="(product, index) in store.products.slice(0, 8)"
          :key="product.id"
          :product="product"
          :style="{ animationDelay: `${index * 0.1}s` }"
          class="fade-in-up"
          @add-to-cart="cartStore.addToCart"
          @open-card="showProduct(product)"
        />
      </div>

      <div class="text-center mt-12">
        <router-link
          to="/catalog"
          class="btn-primary text-lg px-8 py-4 hover:shadow-glow"
        >
          View all products
          <svg
            class="inline-block ml-2 size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Особенности секция -->
  <section class="py-16 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center slide-in-left">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-4"
          >
            <svg
              class="w-8 h-8 text-teal-600 dark:text-teal-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Lightning-fast speed
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Next-gen technology for maximum performance
          </p>
        </div>

        <div class="text-center slide-in-left" style="animation-delay: 0.2s">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-4"
          >
            <svg
              class="w-8 h-8 text-teal-600 dark:text-teal-300"
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
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Quality guaranteed
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Only trusted brands with official warranty
          </p>
        </div>

        <div class="text-center slide-in-left" style="animation-delay: 0.4s">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-4"
          >
            <svg
              class="w-8 h-8 text-teal-600 dark:text-teal-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Loved by gamers
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            Thousands of positive reviews from pro players
          </p>
        </div>
      </div>
    </div>
  </section>

  <Stats />
  <Cta />
</template>
