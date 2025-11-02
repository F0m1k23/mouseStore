<template>
  <footer class="bg-gray-50 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <!-- ЛОГО -->
        <router-link
          to="/"
          class="flex items-center gap-2 text-teal-600 dark:text-teal-300 font-bold text-xl tracking-wide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-7 h-7"
          >
            <path
              d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15H11v-2h2v2zm0-4H11V7h2v6z"
            />
          </svg>
          <span>SpeedTech</span>
        </router-link>

        <p
          class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right dark:text-gray-400"
        >
          Copyright © 2022. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>