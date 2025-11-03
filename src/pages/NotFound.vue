<template>
  <section
    class="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col justify-center items-center relative overflow-hidden text-center"
  >
    <!-- Светящееся фоновое свечение -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-teal-200/10 via-transparent to-transparent dark:from-teal-500/10 blur-3xl"
    ></div>

    <!-- Основной контент -->
    <div class="relative z-10 px-6">
      <h1
        class="text-8xl sm:text-9xl font-extrabold text-teal-600 dark:text-teal-400 drop-shadow-lg animate-pulse"
      >
        404
      </h1>

      <h2
        class="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mt-4"
      >
        Oops! Page not found.
      </h2>

      <p
        class="mt-4 text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed"
      >
        Looks like you wandered into uncharted territory. Don’t worry — you can
        always head back home or browse our catalog.
      </p>

      <div class="flex flex-wrap justify-center gap-4 mt-8">
        <router-link
          to="/"
          class="inline-block rounded-xl bg-teal-600 px-6 py-3 text-white font-medium shadow-md hover:bg-teal-500 transition"
        >
          Go Home
        </router-link>

        <router-link
          to="/catalog"
          class="inline-block rounded-xl border border-teal-600 px-6 py-3 font-medium text-teal-600 hover:bg-teal-50 dark:border-teal-300 dark:text-teal-300 dark:hover:bg-gray-800 transition"
        >
          Browse Catalog
        </router-link>
      </div>

      <!-- Декоративное изображение -->
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
</style>
