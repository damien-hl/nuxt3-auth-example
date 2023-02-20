<script lang="ts" setup>
definePageMeta({ middleware: 'is-guest' })
</script>

<template>
  <div class="container mx-auto">
    <div class="px-3 pt-32">
      <h1 class="mb-3 text-xl font-bold dark:text-white">Public page</h1>
      <p class="mb-3 dark:text-white">This page should be accessible by everyone</p>
    </div>
  </div>
</template>
