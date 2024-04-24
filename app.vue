<script setup lang="ts">
import {
  useLocale,
  useLocales,
  useLocaleDate,
} from './composables/locale';

useHead({
  htmlAttrs: {
    class: 'h-full bg-slate-50 dark:bg-slate-900'
  },
  bodyAttrs: {
    class: 'h-full text-slate-900 dark:text-slate-50'
  }
})

const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date())
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>