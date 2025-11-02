<script setup>
import { ref, computed } from "vue";
const sortOpen = ref(false);
const selectedSort = ref("default");
const emit = defineEmits(["sort-changed"]);

function chooseSort(key) {
  selectedSort.value = key;
  emit("sort-changed", key);
  sortOpen.value = false;
}

const selectedSortLabel = computed(() => {
  const map = {
    default: "Default",
    "price-asc": "Price ↑",
    "price-desc": "Price ↓",
    popularity: "Popularity",
  };
  return map[selectedSort.value] || "Default";
});
</script>

<template>
  <div class="space-y-4 max-w-[500px] my-3 px-3">
    <details
      class="group relative overflow-hidden rounded border bg-white border-gray-300 shadow-sm"
    >
      <summary
        class="flex items-center justify-between gap-2 p-3 text-gray-700 transition-colors hover:text-gray-900 [&amp;::-webkit-details-marker]:hidden"
      >
        <span class="text-sm font-medium"> Availability </span>

        <span class="transition-transform group-open:-rotate-180">
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </span>
      </summary>

      <div class="divide-y divide-gray-300 border-t border-gray-300 bg-white">
        <div class="flex items-center justify-between px-3 py-2">
          <span class="text-sm text-gray-700"> 0 Selected </span>

          <button
            type="button"
            class="text-sm text-gray-700 underline transition-colors hover:text-gray-900"
          >
            Reset
          </button>
        </div>

        <fieldset class="p-3">
          <legend class="sr-only">Checkboxes</legend>

          <div class="flex flex-col items-start gap-3">
            <label for="Option1" class="inline-flex items-center gap-3">
              <input
                type="checkbox"
                class="size-5 rounded border-gray-300 shadow-sm"
                id="Option1"
              />

              <span class="text-sm font-medium text-gray-700"> Option 1 </span>
            </label>

            <label for="Option2" class="inline-flex items-center gap-3">
              <input
                type="checkbox"
                class="size-5 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                id="Option2"
              />

              <span class="text-sm font-medium text-gray-700"> Option 2 </span>
            </label>

            <label for="Option3" class="inline-flex items-center gap-3">
              <input
                type="checkbox"
                class="size-5 rounded border-gray-300 shadow-sm"
                id="Option3"
              />

              <span class="text-sm font-medium text-gray-700"> Option 3 </span>
            </label>
          </div>
        </fieldset>
      </div>
    </details>

    <!-- Sort button (красивый контрол) -->
    <div class="relative">
      <button
        @click="sortOpen = !sortOpen"
        class="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:shadow-md transition"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 text-gray-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01.293.707l-4 4V16a1 1 0 01-1.447.894L8 14.618 4.447 16.894A1 1 0 013 16V8.707L.293 5.999A1 1 0 011 5V4z"
            clip-rule="evenodd"
          />
        </svg>
        Sort:
        <span class="font-semibold text-gray-800 ml-1">{{
          selectedSortLabel
        }}</span>
        <svg
          class="w-4 h-4 ml-2 text-gray-500"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 8l4 4 4-4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </svg>
      </button>

      <transition name="fade-scale">
        <div
          v-if="sortOpen"
          class="absolute z-50 mt-2 w-56 rounded-md bg-white shadow-lg border border-gray-200 py-2"
        >
          <button
            @click="chooseSort('default')"
            class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Default
          </button>
          <button
            @click="chooseSort('price-asc')"
            class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Price: Low to High
          </button>
          <button
            @click="chooseSort('price-desc')"
            class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Price: High to Low
          </button>
          <button
            @click="chooseSort('popularity')"
            class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Popularity
          </button>
        </div>
      </transition>
    </div>

    <details
      class="group relative overflow-hidden rounded bg-white border border-gray-300 shadow-sm s"
    >
      <summary
        class="flex items-center justify-between gap-2 p-3 text-gray-700 transition-colors hover:text-gray-900 [&amp;::-webkit-details-marker]:hidden"
      >
        <span class="text-sm font-medium"> Price </span>

        <span class="transition-transform group-open:-rotate-180">
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </span>
      </summary>

      <div class="divide-y divide-gray-300 border-t border-gray-300 bg-white">
        <div class="flex items-center justify-between px-3 py-2">
          <span class="text-sm text-gray-700"> Max price is $600 </span>

          <button
            type="button"
            class="text-sm text-gray-700 underline transition-colors hover:text-gray-900"
          >
            Reset
          </button>
        </div>

        <div class="flex items-center gap-3 p-3">
          <label for="MinPrice">
            <span class="text-sm text-gray-700"> Min </span>

            <input
              type="number"
              id="MinPrice"
              value="0"
              class="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
            />
          </label>

          <label for="MaxPrice">
            <span class="text-sm text-gray-700"> Max </span>

            <input
              type="number"
              id="MaxPrice"
              value="600"
              class="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
            />
          </label>
        </div>
      </div>
    </details>
  </div>
</template>