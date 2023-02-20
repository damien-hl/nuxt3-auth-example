<script lang="ts" setup>
definePageMeta({ middleware: 'is-authenticated' })
</script>

<template>
  <div class="container mx-auto">
    <div class="px-3 pt-32">
      <h1 class="mb-3 text-xl font-bold dark:text-white">Profile page</h1>
      <p class="mb-3 dark:text-white">This page should only be accessible by authenticated users</p>
    </div>
  </div>
</template>
