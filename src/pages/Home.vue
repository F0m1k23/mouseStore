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
const showProduct = (id) => {
  router.push(`/catalog/${id}`);
  store.showProduct(id);
};
</script>

<template>
  <Hero />
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Welcome to Our Store</h1>
    <div class="flex justify-between items-center">
      <p class="text-gray-700 mb-8">
        Discover the best products at unbeatable prices.
      </p>
      <router-link
        to="/catalog"
        class="group relative inline-flex items-center overflow-hidden rounded-sm px-8 py-3 text-gray-700 focus:ring-3 focus:outline-hidden"
      >
        <span class="absolute -start-full transition-all group-hover:start-4">
          <svg
            class="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </span>

        <span class="text-sm font-medium transition-all group-hover:ms-4">
          Весь каталог
        </span>
      </router-link>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in store.products"
        :key="product.id"
        :product="product"
        @add-to-cart="cartStore.addToCart"
        @open-card="showProduct(product.id)"
      />
    </div>
  </div>
  <Stats />
  <Cta />
</template>
