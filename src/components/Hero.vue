<script setup>
import { useCartStore } from "../store/cart";
const cartStore = useCartStore();
</script>

<template>
  <section
    class="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center relative overflow-hidden"
  >
    <div
      class="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10"
    >
      <!-- Текстовая часть -->
      <div class="text-left space-y-6">
        <h1
          class="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          Your
          <span
            class="text-teal-600 dark:text-teal-300 underline underline-offset-4 decoration-teal-500/30"
            >speed.</span
          >
          <br />
          Your precision. Your victory.
        </h1>

        <p
          class="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-prose"
        >
          Modern gaming mice and keyboards designed for those who value speed,
          control, and style. Get ready to win with every click.
        </p>

        <div class="flex flex-wrap gap-4 pt-2">
          <router-link
            to="/catalog"
            class="inline-block rounded-xl bg-teal-600 px-6 py-3 text-white font-medium shadow-md hover:bg-teal-500 transition"
          >
            Catalog
          </router-link>

          <router-link
            to="/about"
            class="inline-block rounded-xl border border-teal-600 px-6 py-3 font-medium text-teal-600 hover:bg-teal-50 dark:border-teal-300 dark:text-teal-300 dark:hover:bg-gray-800 transition"
          >
            Learn more
          </router-link>

          <!-- Cart quick access -->
        </div>
      </div>

      <!-- Изображение -->
      <div class="faded-image flex justify-center md:justify-end">
        <img
          src="../assets/mouse.avif"
          alt="gaming illustration"
          class="w-full animate-float"
        />
      </div>
    </div>

    <!-- Декоративное свечение -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-teal-200/10 to-transparent dark:from-teal-500/5 blur-3xl"
    ></div>
  </section>
</template>

<style scoped>
.faded-image {
  width: 420px;
  height: 420px;
  position: relative;
  overflow: hidden;
  clip-path: polygon(
    50% 0%,
    83% 12%,
    100% 43%,
    94% 78%,
    68% 100%,
    32% 100%,
    6% 78%,
    0% 43%,
    17% 12%
  );
  mask-image: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-composite: intersect;
  -webkit-mask-composite: destination-in;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  transition: transform 0.4s ease;
  cursor: pointer;
}

.faded-image:hover {
  transform: scale(1.05);
}

.faded-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
@media (max-width: 468px) {
  .faded-image {
    width: 300px;
    height: 300px;
  }
}
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
.animate-float {
  animation: float 5s ease-in-out infinite;
}
</style>
