<template>
  <section
    class="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
  >
    <!-- Упрощённый фон -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-24 left-24 w-72 h-72 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 dark:from-teal-500/15 dark:to-cyan-500/15 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-24 right-32 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-500/15 dark:to-purple-500/15 rounded-full blur-3xl animate-pulse"
      ></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <!-- Контент -->
        <div class="space-y-10 slide-in-left">
          <div class="space-y-6">
            <div
              class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-100 via-blue-100 to-purple-100 dark:from-teal-900/40 dark:via-blue-900/40 dark:to-purple-900/40 rounded-full text-teal-700 dark:text-teal-300 text-sm font-medium backdrop-blur-sm border border-teal-200/50 dark:border-teal-600/30"
            >
              <svg
                class="w-5 h-5 animate-spin"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              About Our Store
            </div>

            <h2
              class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              <span
                class="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Premium Gaming Gear
              </span>
              <br />
              <span
                class="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              >
                for Serious Players
              </span>
            </h2>

            <p
              class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl"
            >
              We specialize in selling premium gaming mice and accessories from
              the world’s leading brands. Our mission is to deliver top-tier
              performance, precision, and comfort to every gamer — from casual
              players to professional esports athletes. Each product is
              carefully selected and tested by our experts to ensure the highest
              quality standards and the ultimate gaming experience.
            </p>
          </div>

          <!-- Особенности -->
          <div class="space-y-5">
            <div
              class="flex items-center gap-4 p-6 bg-white/70 dark:bg-gray-800/60 rounded-3xl backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <div
                class="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <svg
                  class="w-7 h-7 text-white"
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
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white text-lg">
                  High Performance
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Professional-level precision and speed
                </p>
              </div>
            </div>

            <div
              class="flex items-center gap-4 p-6 bg-white/70 dark:bg-gray-800/60 rounded-3xl backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <div
                class="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <svg
                  class="w-7 h-7 text-white"
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
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white text-lg">
                  Quality Guarantee
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Official products with manufacturer warranty
                </p>
              </div>
            </div>

            <div
              class="flex items-center gap-4 p-6 bg-white/70 dark:bg-gray-800/60 rounded-3xl backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <div
                class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white text-lg">
                  Attention to Detail
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Designed with gamers’ needs in mind
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Изображение -->
        <div class="relative fade-in-up">
          <div class="relative group">
            <img
              src="../assets/mouse.avif"
              alt="gaming mouse"
              class="w-full h-96 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10 rounded-3xl"
            ></div>
          </div>

          <!-- Фоновые круги -->
          <div
            class="absolute -top-8 -left-8 w-28 h-28 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-20 blur-2xl animate-pulse"
          ></div>
          <div
            class="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-2xl animate-pulse"
          ></div>

          <!-- Статистика -->
          <div class="absolute bottom-8 left-8 right-8">
            <div class="grid grid-cols-3 gap-3">
              <div
                class="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-3 text-center border border-white/20 dark:border-gray-700/20"
              >
                <div
                  class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white"
                >
                  5000+
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-400">
                  Sales
                </div>
              </div>
              <div
                class="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-3 text-center border border-white/20 dark:border-gray-700/20"
              >
                <div
                  class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white"
                >
                  4.9★
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-400">
                  Rating
                </div>
              </div>
              <div
                class="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-3 text-center border border-white/20 dark:border-gray-700/20"
              >
                <div
                  class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white"
                >
                  24/7
                </div>
                <div class="text-xs text-gray-600 dark:text-gray-400">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
