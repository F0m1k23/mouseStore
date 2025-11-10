<template>
  <section
    class="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
  >
    <!-- Расширенные фоновые декоративные элементы -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Основные градиентные круги -->
      <div
        class="absolute top-20 left-20 w-60 h-60 bg-gradient-to-br from-teal-200/30 to-cyan-200/30 dark:from-teal-500/15 dark:to-cyan-500/15 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute top-40 right-32 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-500/15 dark:to-purple-500/15 rounded-full blur-3xl animate-pulse"
        style="animation-delay: 1.5s"
      ></div>
      <div
        class="absolute bottom-20 left-1/3 w-48 h-48 bg-gradient-to-br from-purple-200/30 to-pink-200/30 dark:from-purple-500/15 dark:to-pink-500/15 rounded-full blur-2xl animate-pulse"
        style="animation-delay: 3s"
      ></div>

      <!-- Плавающие геометрические элементы -->
      <svg
        class="absolute top-16 left-1/4 w-16 h-16 text-teal-200/40 dark:text-teal-500/20 animate-float"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>

      <svg
        class="absolute top-32 right-1/5 w-12 h-12 text-blue-200/40 dark:text-blue-500/20 animate-bounce"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
        />
      </svg>

      <svg
        class="absolute bottom-32 left-20 w-20 h-20 text-purple-200/40 dark:text-purple-500/20 animate-pulse"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 2l9 4.9V17a4 4 0 11-2 3.46L12 22l-7-1.54V17a4 4 0 11-2-3.46V6.9L12 2z"
        />
      </svg>

      <!-- Анимированные точки -->
      <div
        class="absolute top-1/4 left-1/3 w-3 h-3 bg-teal-400 rounded-full animate-bounce"
        style="animation-delay: 0.5s"
      ></div>
      <div
        class="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
        style="animation-delay: 1s"
      ></div>
      <div
        class="absolute bottom-1/3 left-1/2 w-4 h-4 bg-purple-400 rounded-full animate-bounce"
        style="animation-delay: 2s"
      ></div>
      <div
        class="absolute top-2/3 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce"
        style="animation-delay: 2.5s"
      ></div>

      <!-- Линии соединения -->
      <svg
        class="absolute top-1/4 left-1/6 w-32 h-32 text-teal-200/20 dark:text-teal-500/10"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M20,20 Q50,10 80,30 T80,80"
          stroke="currentColor"
          stroke-width="1"
          fill="none"
          class="animate-pulse"
        />
      </svg>

      <svg
        class="absolute bottom-1/4 right-1/6 w-24 h-24 text-blue-200/20 dark:text-blue-500/10"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M10,90 Q30,70 60,50 T90,20"
          stroke="currentColor"
          stroke-width="1"
          fill="none"
          class="animate-pulse"
          style="animation-delay: 1s"
        />
      </svg>
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
              <span class="relative">
                <span
                  class="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  Premium Gaming Gear
                </span>
                <div
                  class="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-teal-200/50 via-blue-200/50 to-purple-200/50 dark:from-teal-500/20 dark:via-blue-500/20 dark:to-purple-500/20 rounded-full transform -skew-x-12 animate-pulse"
                ></div>
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
              Мы специализируемся на продаже премиальных игровых устройств от
              ведущих мировых брендов. Каждый продукт тщательно отбирается
              нашими экспертами для обеспечения максимальной производительности
              и комфорта.
            </p>
          </div>

          <!-- Особенности с улучшенными декорациями -->
          <div class="space-y-5">
            <div
              class="group relative flex items-center gap-4 p-6 bg-white/60 dark:bg-gray-800/60 rounded-3xl backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <!-- Декоративная линия слева -->
              <div
                class="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-cyan-500 rounded-l-3xl"
              ></div>

              <!-- Иконка с анимацией -->
              <div class="relative">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
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
                <div
                  class="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"
                ></div>
              </div>

              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white text-lg">
                  Высокая производительность
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Профессиональный уровень для киберспорта
                </p>
              </div>

              <!-- Декоративные точки справа -->
              <div class="ml-auto flex gap-1">
                <div
                  class="w-2 h-2 bg-teal-400 rounded-full animate-bounce"
                ></div>
                <div
                  class="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                  style="animation-delay: 0.2s"
                ></div>
              </div>
            </div>

            <div
              class="group relative flex items-center gap-4 p-6 bg-white/60 dark:bg-gray-800/60 rounded-3xl backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <!-- Декоративная линия слева -->
              <div
                class="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-3xl"
              ></div>

              <div class="relative">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
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
                <div
                  class="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"
                  style="animation-delay: 0.5s"
                ></div>
              </div>

              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white text-lg">
                  Гарантия качества
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Оригинальная продукция с официальной гарантией
                </p>
              </div>

              <div class="ml-auto flex gap-1">
                <div
                  class="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                  style="animation-delay: 0.1s"
                ></div>
                <div
                  class="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                  style="animation-delay: 0.3s"
                ></div>
              </div>
            </div>

            <div
              class="group relative flex items-center gap-4 p-6 bg-white/60 dark:bg-gray-800/60 rounded-3xl backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <!-- Декоративная линия слева -->
              <div
                class="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-l-3xl"
              ></div>

              <div class="relative">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
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
                <div
                  class="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 rounded-full animate-ping"
                  style="animation-delay: 1s"
                ></div>
              </div>

              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white text-lg">
                  Любовь к деталям
                </h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Мы понимаем потребности геймеров
                </p>
              </div>

              <div class="ml-auto flex gap-1">
                <div
                  class="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                  style="animation-delay: 0.2s"
                ></div>
                <div
                  class="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                  style="animation-delay: 0.4s"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Изображение с расширенными декоративными элементами -->
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

            <!-- Плавающие элементы поверх изображения -->
            <div
              class="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-bounce"
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>

            <div
              class="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-bounce"
              style="animation-delay: 1s"
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

          <!-- Увеличенные декоративные элементы вокруг изображения -->
          <div
            class="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-20 blur-2xl animate-pulse"
          ></div>
          <div
            class="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-2xl animate-pulse"
            style="animation-delay: 1.5s"
          ></div>
          <div
            class="absolute top-1/2 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-xl animate-pulse"
            style="animation-delay: 2.5s"
          ></div>

          <!-- Вспомогательные декоративные элементы -->
          <div
            class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-300 dark:bg-teal-600 rotate-45 opacity-60"
          ></div>
          <div
            class="absolute -bottom-4 right-1/4 w-4 h-4 bg-purple-300 dark:bg-purple-600 rotate-45 opacity-60"
            style="animation-delay: 0.5s"
          ></div>

          <!-- Статистика поверх изображения -->
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
                  Продаж
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
                  Рейтинг
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
                  Поддержка
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
