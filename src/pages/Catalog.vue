<script setup>
import Filter from "../components/Filter.vue";
import ProductCard from "../components/ProductCard.vue";
import { useCartStore } from "../store/cart";
import { useProductsStore } from "../store/products";
import { useRouter } from "vue-router";
const store = useProductsStore();
const cartStore = useCartStore();
const router = useRouter();
const showProduct = (id) => {
  store.showProduct(id);
  router.push(`/catalog/${id}`);
};
</script>
<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 box-border my-10">
    <h2 class="text-2xl font-bold mt-3">Все товары</h2>
    <Filter />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in store.products"
        :key="product.id"
        :product="product"
        @add-to-cart="cartStore.addToCart($event)"
        @open-card="showProduct(product.id)"
      />
    </div>
  </div>
</template>