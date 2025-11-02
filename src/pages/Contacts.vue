<template>
  <section class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
      <!-- Контактная информация -->
      <div>
        <h2
          class="text-3xl sm:text-4xl font-bold text-teal-600 dark:text-teal-300 mb-6"
        >
          Свяжись с нами
        </h2>

        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Мы всегда рады новым идеям и отзывам. Напиши нам — и мы ответим в
          течение дня.
        </p>

        <ul class="space-y-5 text-gray-700 dark:text-gray-300">
          <li class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-teal-600 dark:text-teal-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 10.5a8.38 8.38 0 01-.9 3.8c-.54 1.1-1.36 2.1-2.4 2.9l-5.7 4.6a.75.75 0 01-.9 0l-5.7-4.6a8.38 8.38 0 01-2.4-2.9A8.38 8.38 0 013 10.5a8.5 8.5 0 1117 0z"
              />
            </svg>
            <span>ul. Wita Stwosza 12, Wrocław, Poland</span>
          </li>

          <li class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-teal-600 dark:text-teal-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0-1.243.506-2.364 1.324-3.182A4.482 4.482 0 016.75 2.25h10.5c1.243 0 2.364.506 3.182 1.324A4.482 4.482 0 0121.75 6.75v10.5a4.482 4.482 0 01-1.324 3.182A4.482 4.482 0 0117.25 21.75H6.75a4.482 4.482 0 01-3.182-1.324A4.482 4.482 0 012.25 17.25V6.75z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 8.25l7.5 7.5m0-7.5l-7.5 7.5"
              />
            </svg>
            <span>support@keyandclick.pl</span>
          </li>

          <li class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-teal-600 dark:text-teal-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 4.5l19.5 7.5-19.5 7.5v-15z"
              />
            </svg>
            <span>@keyandclick_shop (Telegram)</span>
          </li>
        </ul>

        <div class="mt-8 flex gap-4">
          <a href="#" class="text-teal-600 dark:text-teal-300 hover:underline"
            >Instagram</a
          >
          <a href="#" class="text-teal-600 dark:text-teal-300 hover:underline"
            >Telegram</a
          >
          <a href="#" class="text-teal-600 dark:text-teal-300 hover:underline"
            >GitHub</a
          >
        </div>
      </div>

      <!-- Карта -->
      <div class="relative">
        <div
          class="absolute -inset-2 bg-teal-600/20 dark:bg-teal-300/10 rounded-3xl blur-2xl"
        ></div>
        <iframe
          class="relative w-full h-[400px] rounded-3xl shadow-lg border-0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10048.058292617586!2d17.0242612!3d51.1093196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27f57a1f21b%3A0xe05a6225c44b8b3f!2sWroc%C5%82aw!5e0!3m2!1sen!2spl!4v1730551932997!5m2!1sen!2spl"
        ></iframe>
      </div>
    </div>
  </section>
</template>
