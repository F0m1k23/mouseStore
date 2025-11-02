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
          Твоя
          <span
            class="text-teal-600 dark:text-teal-300 underline underline-offset-4 decoration-teal-500/30"
            >скорость.</span
          >
          <br />
          Твоя точность. Твоя победа.
        </h1>

        <p
          class="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-prose"
        >
          Современные игровые мыши и клавиатуры, созданные для тех, кто ценит
          скорость, контроль и стиль. Готовься к победе на каждом клике.
        </p>

        <div class="flex flex-wrap gap-4 pt-2">
          <router-link
            to="/catalog"
            class="inline-block rounded-xl bg-teal-600 px-6 py-3 text-white font-medium shadow-md hover:bg-teal-500 transition"
          >
            Каталог
          </router-link>

          <router-link
            to="/about"
            class="inline-block rounded-xl border border-teal-600 px-6 py-3 font-medium text-teal-600 hover:bg-teal-50 dark:border-teal-300 dark:text-teal-300 dark:hover:bg-gray-800 transition"
          >
            Подробнее
          </router-link>
        </div>
      </div>

      <!-- Изображение -->
      <div class="flex justify-center md:justify-end">
        <img
          src="../assets/game.svg"
          alt="gaming illustration"
          class="max-w-md w-full animate-float"
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
