<script setup>
import { useCartStore } from "../store/cart";
const cartStore = useCartStore();
</script>

<template>
  <section
    class="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen flex items-center relative overflow-hidden"
  >
    <!-- Анимированный фон -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Плавающие круги -->
      <div
        class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-200/20 to-blue-200/20 dark:from-teal-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 2s"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-100/30 to-cyan-100/30 dark:from-teal-400/5 dark:to-cyan-400/5 rounded-full blur-2xl animate-pulse"
        style="animation-delay: 1s"
      ></div>

      <!-- Геометрические элементы -->
      <div
        class="absolute top-32 right-20 w-2 h-2 bg-teal-400 dark:bg-teal-500 rounded-full animate-bounce"
        style="animation-delay: 0.5s"
      ></div>
      <div
        class="absolute top-48 right-32 w-3 h-3 bg-blue-400 dark:bg-blue-500 rounded-full animate-bounce"
        style="animation-delay: 1.5s"
      ></div>
      <div
        class="absolute bottom-40 left-16 w-4 h-4 bg-purple-400 dark:bg-purple-500 rounded-full animate-bounce"
        style="animation-delay: 2.5s"
      ></div>

      <!-- Линии -->
      <svg
        class="absolute top-20 left-1/4 w-32 h-32 text-teal-200/30 dark:text-teal-500/10"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>

      <svg
        class="absolute bottom-32 right-1/4 w-24 h-24 text-blue-200/30 dark:text-blue-500/10"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
        />
      </svg>
    </div>

    <div
      class="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10"
    >
      <!-- Текстовая часть -->
      <div class="text-left space-y-8 slide-in-left">
        <div class="space-y-4">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full text-teal-700 dark:text-teal-300 text-sm font-medium"
          >
            <svg
              class="w-4 h-4"
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
            New Collection 2024
          </div>

          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
          >
            Your
            <span class="relative">
              <span class="text-teal-600 dark:text-teal-300 relative z-10"
                >speed.</span
              >
              <div
                class="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-teal-200/50 to-cyan-200/50 dark:from-teal-500/20 dark:to-cyan-500/20 rounded-full transform -skew-x-12 animate-pulse"
              ></div>
            </span>
            <br />
            <span
              class="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            >
              Your precision.
            </span>
            <br />
            <span class="text-3xl sm:text-4xl lg:text-5xl">Your victory.</span>
          </h1>
        </div>

        <p
          class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-prose leading-relaxed"
        >
          Modern gaming mice and keyboards designed for those who value
          <span class="font-semibold text-teal-600 dark:text-teal-400"
            >speed</span
          >,
          <span class="font-semibold text-blue-600 dark:text-blue-400"
            >control</span
          >, and
          <span class="font-semibold text-purple-600 dark:text-purple-400"
            >style</span
          >. Get ready to win with every click.
        </p>

        <div class="flex flex-wrap gap-4 pt-4">
          <router-link
            to="/catalog"
            class="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-500 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl hover:from-teal-700 hover:to-teal-600 transition-all duration-300 hover:scale-105"
          >
            <svg
              class="w-5 h-5 group-hover:rotate-12 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 9H6L5 9z"
              ></path>
            </svg>
            Shop Now
          </router-link>

          <router-link
            to="/about"
            class="group inline-flex items-center gap-2 rounded-2xl border-2 border-teal-600 px-8 py-4 font-semibold text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            <svg
              class="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Learn More
          </router-link>
        </div>

        <!-- Статистика -->
        <div
          class="flex flex-wrap gap-8 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white">
              10K+
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Happy Customers
            </div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white">
              50+
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Products</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white">
              99%
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Satisfaction
            </div>
          </div>
        </div>
      </div>

      <!-- Изображение с декоративными элементами -->
      <div class="relative flex justify-center lg:justify-end fade-in-up">
        <!-- Главное изображение -->
        <div class="relative faded-image">
          <img
            src="../assets/mouse.avif"
            alt="gaming mouse"
            class="w-full animate-float"
          />

          <!-- Оверлей эффект -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent rounded-3xl animate-pulse"
          ></div>
        </div>

        <!-- Вспомогательные декоративные элементы -->
        <div
          class="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-20 blur-xl animate-pulse"
        ></div>
        <div
          class="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl animate-pulse"
          style="animation-delay: 1s"
        ></div>

        <!-- Иконки преимуществ -->
        <div
          class="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg animate-bounce"
          style="animation-delay: 0.5s"
        >
          <svg
            class="w-6 h-6 text-teal-600 dark:text-teal-400"
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

        <div
          class="absolute bottom-8 left-4 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg animate-bounce"
          style="animation-delay: 1.5s"
        >
          <svg
            class="w-6 h-6 text-blue-600 dark:text-blue-400"
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
      </div>
    </div>
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
