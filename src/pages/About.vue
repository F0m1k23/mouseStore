<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <!-- Текст -->
      <div>
        <h2
          class="text-3xl sm:text-4xl font-bold text-teal-600 dark:text-teal-300 mb-6"
        >
          О нас
        </h2>

        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Мы создаём комфорт в каждом клике. Наша команда объединяет страсть к
          технологиям и дизайну, чтобы делать устройства, которыми приятно
          пользоваться каждый день.
        </p>

        <p class="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
          Начиная с простых решений для настольных ПК, мы выросли в полноценный
          бренд, который разрабатывает клавиатуры, мыши и аксессуары с упором на
          эргономику, стиль и надёжность.
        </p>

        <div class="flex gap-4 sm:justify-start justify-center">
          <button
            class="px-6 py-3 rounded-xl bg-teal-600 text-white hover:bg-teal-500 transition cursor-pointer"
          >
            Наши товары
          </button>
          <button
            class="px-6 py-3 rounded-xl border border-teal-600 text-teal-600 dark:border-teal-300 dark:text-teal-300 hover:bg-teal-600 hover:text-white transition cursor-pointer"
          >
            Связаться с нами
          </button>
        </div>
      </div>

      <!-- Изображение -->
      <div class="relative">
        <div
          class="absolute -inset-2 bg-teal-600/20 dark:bg-teal-300/10 rounded-3xl blur-2xl"
        ></div>
        <img
          src="https://images.unsplash.com/photo-1587202372775-98927b5f46e1?auto=format&fit=crop&w=800&q=80"
          alt="О нас"
          class="relative rounded-3xl shadow-lg object-cover w-full h-[400px]"
        />
      </div>
    </div>
  </section>
</template>
