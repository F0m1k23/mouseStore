<template>
  <section
    class="bg-gradient-to-br from-teal-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
  >
    <!-- Декоративные элементы -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-teal-200/20 to-transparent dark:from-teal-500/10 blur-3xl"
    ></div>

    <div class="relative p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-lg text-center slide-in-left">
        <h2
          class="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white mb-4"
        >
          Подпишись и будь в курсе
          <span class="gradient-text">новых товаров!</span>
        </h2>

        <p
          class="hidden text-gray-600 sm:mt-4 sm:block dark:text-gray-400 text-lg"
        >
          Подпишись на рассылку, чтобы получать новости, акции и обновления о
          новых продуктах первым.
        </p>
      </div>

      <div
        class="mx-auto mt-8 max-w-xl slide-in-left"
        style="animation-delay: 0.2s"
      >
        <form action="#" class="sm:flex sm:gap-4">
          <div class="sm:flex-1">
            <label for="email" class="sr-only">Email</label>

            <input
              type="email"
              placeholder="Ваш email адрес"
              class="w-full rounded-xl border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 focus:border-teal-500 focus:ring-3 focus:ring-teal-500/20 focus:outline-hidden dark:border-gray-700 dark:bg-gray-800 dark:text-white hover:shadow-md"
            />
          </div>

          <button
            type="submit"
            class="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-4 text-white font-medium shadow-md transition-all duration-200 hover:shadow-glow hover:scale-105 focus:ring-3 focus:ring-teal-500/20 focus:outline-hidden sm:mt-0 sm:w-auto active:scale-95"
          >
            <span class="text-sm font-medium">Подписаться</span>

            <svg
              class="size-5 transition-transform group-hover:translate-x-1"
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
          </button>
        </form>

        <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          Без спама, отписаться можно в любое время
        </p>
      </div>
    </div>
  </section>
</template>