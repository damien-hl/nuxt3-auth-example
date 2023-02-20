<script lang="ts" setup>
definePageMeta({ middleware: 'is-admin' })
</script>

<template>
  <div class="container mx-auto">
    <div class="px-3 pt-32">
      <h1 class="mb-3 text-xl font-bold dark:text-white">Admin page</h1>
      <p class="mb-3 dark:text-white">This page should only be accessible by users with admin role</p>
    </div>
  </div>
</template>
