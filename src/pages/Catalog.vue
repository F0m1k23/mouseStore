<script setup>
import Filter from "../components/Filter.vue";
import ProductCard from "../components/ProductCard.vue";
import { useCartStore } from "../store/cart";
import { useProductsStore } from "../store/products";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
const store = useProductsStore();
const cartStore = useCartStore();
const router = useRouter();
const selectedSort = ref("default");

const showProduct = (id) => {
  store.showProduct(id);
  router.push(`/catalog/${id}`);
};

// computed list with basic sorting applied
const displayedProducts = computed(() => {
  const items = [...store.products];
  switch (selectedSort.value) {
    case "price-asc":
      return items.sort((a, b) => a.price - b.price);
    case "price-desc":
      return items.sort((a, b) => b.price - a.price);
    case "popularity":
      // assuming product has `popularity` or `rating`; fallback to id
      return items.sort(
        (a, b) =>
          (b.popularity || b.rating || 0) - (a.popularity || a.rating || 0)
      );
    default:
      return items;
  }
});

function onSortChanged(key) {
  selectedSort.value = key;
}
</script>
<template>
  <div
    class="max-w-7xl mx-auto sm:px-6 lg:px-8 box-border my-10 py-12 bg-gray-900"
  >
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-bold mt-3 text-teal-400">All Products</h2>
      <div class="text-sm text-gray-600 mt-3">
        Shown: {{ displayedProducts.length }}
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-4 mt-4">
      <div class="md:w-64">
        <Filter @sort-changed="onSortChanged" />
      </div>

      <div class="flex-1">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductCard
            v-for="product in displayedProducts"
            :key="product.id"
            :product="product"
            @add-to-cart="cartStore.addToCart($event)"
            @open-card="showProduct(product.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>