<template>
  <section
    class="bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden"
  >
    <!-- Мягкий фон -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Плавные градиенты -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-teal-100/20 via-cyan-100/15 to-blue-100/20 dark:from-teal-500/10 dark:via-cyan-500/5 dark:to-blue-500/10"
      ></div>

      <!-- Пара светящихся кругов -->
      <div
        class="absolute top-20 left-16 w-56 h-56 bg-gradient-to-br from-teal-300/25 to-cyan-300/25 dark:from-teal-500/10 dark:to-cyan-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-24 w-72 h-72 bg-gradient-to-br from-blue-300/25 to-purple-300/25 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse"
      ></div>
    </div>

    <div class="relative p-8 md:p-12 lg:px-16 lg:py-20">
      <div class="mx-auto max-w-3xl text-center">
        <!-- Бейдж -->
        <div
          class="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 rounded-full text-teal-700 dark:text-teal-300 text-sm font-medium"
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
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
          Newsletter Subscription
        </div>

        <!-- Заголовок -->
        <h2
          class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Subscribe & Stay Updated on
          <span
            class="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent"
          >
            New Products!
          </span>
        </h2>

        <p
          class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Be the first to know about our latest gaming gear, special offers, and
          exclusive community discounts. Join the MouseStore family today!
        </p>

        <!-- Форма подписки -->
        <form
          @submit.prevent
          class="mx-auto mt-10 max-w-2xl flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            class="flex-1 rounded-xl border-2 border-gray-200 bg-white/80 dark:bg-gray-800/80 p-4 text-base shadow-sm transition-all focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-gray-700 dark:text-white"
          />
          <button
            type="submit"
            class="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-teal-700 hover:to-blue-700 transition-all"
          >
            Subscribe
          </button>
        </form>

        <!-- Доп. информация -->
        <div
          class="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-gray-500 dark:text-gray-400"
        >
          <span class="flex items-center gap-2">
            <svg
              class="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            No spam
          </span>
          <span class="flex items-center gap-2">
            <svg
              class="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Unsubscribe anytime
          </span>
          <span class="flex items-center gap-2">
            <svg
              class="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Exclusive offers
          </span>
        </div>

        <!-- Мини-блок с рейтингом -->
        <div class="mt-12">
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Trusted by 10,000+ subscribers
          </p>
          <div class="flex justify-center items-center gap-2">
            <div class="flex text-yellow-400">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                />
              </svg>
            </div>
            <span class="text-sm text-gray-600 dark:text-gray-400 ml-1"
              >4.9/5 rating</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
