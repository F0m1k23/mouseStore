<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <!-- Текст -->
      <div>
        <h2
          class="text-3xl sm:text-4xl font-bold text-teal-600 dark:text-teal-300 mb-6"
        >
          About Us
        </h2>

        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          We create comfort in every click. Our team combines passion for
          technology and design to make devices that are a pleasure to use every
          day.
        </p>

        <p class="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
          Starting from simple desktop PC solutions, we have grown into a
          full-fledged brand that develops keyboards, mice, and accessories with
          a focus on ergonomics, style, and reliability.
        </p>

        <div class="flex gap-4 sm:justify-start justify-center">
          <router-link
            to="/catalog"
            class="px-6 py-3 rounded-xl bg-teal-600 text-white hover:bg-teal-500 transition cursor-pointer"
          >
            Our Products
          </router-link>
          <router-link
            to="/contacts"
            class="px-6 py-3 rounded-xl border border-teal-600 text-teal-600 dark:border-teal-300 dark:text-teal-300 hover:bg-teal-600 hover:text-white transition cursor-pointer"
          >
            Contact Us
          </router-link>
        </div>
      </div>

      <!-- Изображение -->
      <div class="relative">
        <div
          class="absolute -inset-2 bg-teal-600/20 dark:bg-teal-300/10 rounded-3xl blur-2xl"
        ></div>
        <img
          src="../assets/game.svg"
          alt="About Us"
          class="relative rounded-3xl shadow-lg object-cover w-full h-[400px]"
        />
      </div>
    </div>
  </section>
</template>