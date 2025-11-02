<script setup>
// Карточка товара — небольшой, самодостаточный компонент.
// Принимает `product` в props и эмитит события для добавления в корзину и открытия карточки.
import { ref } from "vue";

const inFavorite = ref(false);
const addInFavorite = () => {
  // Тогглим состояние избранного — пока только локально
  inFavorite.value = !inFavorite.value;
  console.log("Product added to favorites:", props.product?.id);
};

// Объявляем события, которые компонент может эмитить
const emit = defineEmits(["add-to-cart", "open-card"]);
const props = defineProps({
  product: Object,
});
</script>

<template>
  <div
    class="group relative block overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
  >
    <!-- Кнопка избранного -->
    <button
      @click="addInFavorite"
      :class="{
        'bg-teal-600 text-white': inFavorite,
        'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300':
          !inFavorite,
      }"
      class="absolute right-4 top-4 z-10 rounded-full p-2 shadow-md transition hover:bg-teal-500 hover:text-white cursor-pointer"
    >
      <span class="sr-only">В избранное</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733C11.285 4.876 9.623 3.75 7.688 3.75 5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>

    <!-- Картинка -->
    <img
      @click="$emit('open-card')"
      :src="props.product.images?.[0]"
      alt="product image"
      class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 cursor-pointer"
    />

    <!-- Контент карточки -->
    <div class="p-6 space-y-3">
      <span
        class="inline-block rounded-full bg-teal-600/10 text-teal-600 dark:bg-teal-300/10 dark:text-teal-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide"
      >
        New
      </span>

      <h3
        class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors cursor-pointer"
        @click="$emit('open-card')"
      >
        {{ props.product.name }}
      </h3>

      <p class="text-sm text-gray-700 dark:text-gray-400">
        {{ props.product.description?.slice(0, 60) }}...
      </p>

      <div class="flex items-center justify-between pt-3">
        <p class="text-lg font-bold text-teal-600 dark:text-teal-300">
          ${{ props.product.price }}
        </p>

        <button
          type="button"
          @click.prevent="emit('add-to-cart', props.product)"
          aria-label="Добавить в корзину"
          class="rounded-xl bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-500 transition-all duration-200 active:scale-95"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>
