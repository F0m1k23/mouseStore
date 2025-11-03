<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "../store/products";
import { useCartStore } from "../store/cart";

const cartStore = useCartStore();
const route = useRoute();
const store = useProductsStore();

// локальные состояния
const activeImage = ref("");
const isZoomed = ref(false);
const loading = ref(true);

// Загрузка товара по slug
async function loadProduct() {
  const slug = route.params.slug;
  if (!slug) return;
  loading.value = true;
  await store.showProductBySlug(slug); // 👈 используем slug
  activeImage.value = store.product?.images?.[0] || "";
  loading.value = false;
}

// При первом открытии страницы
onMounted(loadProduct);

// Если пользователь открывает другой товар (меняется slug)
watch(
  () => route.params.slug,
  () => loadProduct()
);

// Для галереи
const changeImage = (img) => (activeImage.value = img);
const toggleZoom = () => (isZoomed.value = !isZoomed.value);
</script>

<template>
  <section
    class="min-h-screen py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
  >
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <!-- Если товар не загружен -->
      <div
        v-if="!store.product"
        class="text-center py-20 text-gray-500 dark:text-gray-400"
      >
        <span class="text-lg">Loading product...</span>
      </div>

      <!-- Контент, когда товар есть -->
      <div v-else>
        <h1
          class="text-3xl sm:text-4xl font-bold text-teal-600 dark:text-teal-300 mb-10 text-center"
        >
          {{ store.product.name }}
        </h1>

        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Галерея -->
          <div class="flex flex-col items-center lg:items-start">
            <transition name="fade" mode="out-in">
              <img
                :key="activeImage || store.product.images?.[0]"
                :src="activeImage || store.product.images?.[0]"
                alt="main image"
                class="rounded-3xl w-full max-w-md h-96 object-cover shadow-lg border border-gray-200 dark:border-gray-700 mb-6 cursor-zoom-in transition-transform duration-300 hover:scale-105"
                @click="toggleZoom"
              />
            </transition>

            <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
              <img
                v-for="(image, index) in store.product.images"
                :key="index"
                :src="image"
                alt="item thumbnail"
                @click="changeImage(image)"
                class="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border-2 cursor-pointer transition duration-200 hover:scale-105"
                :class="{
                  'border-teal-600 dark:border-teal-300':
                    image === (activeImage || store.product.images?.[0]),
                  'border-gray-300 dark:border-gray-700':
                    image !== (activeImage || store.product.images?.[0]),
                }"
              />
            </div>
          </div>

          <!-- Описание -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md">
            <h2
              class="text-2xl font-semibold text-teal-600 dark:text-teal-300 mb-4"
            >
              Характеристики
            </h2>

            <dl class="space-y-3 text-sm sm:text-base">
              <div>
                <dt class="font-semibold text-gray-700 dark:text-gray-300">
                  Описание:
                </dt>
                <dd class="text-gray-600 dark:text-gray-400 mt-1">
                  {{ store.product.description || "Описание отсутствует" }}
                </dd>
              </div>

              <div>
                <dt class="font-semibold text-gray-700 dark:text-gray-300">
                  Цвета:
                </dt>
                <dd class="flex flex-wrap gap-2 mt-1">
                  <span
                    v-for="color in store.product.colors"
                    :key="color"
                    class="inline-block px-3 py-1 rounded-full bg-teal-600/10 text-teal-700 dark:bg-teal-300/10 dark:text-teal-300 text-sm"
                  >
                    {{ color }}
                  </span>
                </dd>
              </div>

              <div>
                <dt class="font-semibold text-gray-700 dark:text-gray-300">
                  Цена:
                </dt>
                <dd
                  class="text-2xl font-bold text-teal-600 dark:text-teal-300 mt-1"
                >
                  {{ store.product.price }} zł
                </dd>
              </div>
            </dl>

            <div class="mt-8">
              <button
                @click="cartStore.addToCart(store.product)"
                type="button"
                class="w-full bg-teal-600 text-white py-3 rounded-xl font-medium text-lg shadow-sm hover:bg-teal-500 transition duration-200"
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Zoom Overlay -->
    <div
      v-if="isZoomed"
      @click="toggleZoom"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out transition-opacity"
    >
      <img
        :src="activeImage || store.product.images?.[0]"
        class="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl transition-transform duration-300"
      />
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
