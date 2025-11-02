<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { Toaster } from "vue-sonner";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <Toaster position="top-right" rich-colors theme="system" />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
</style>
