<script lang="ts" setup>
defineProps<{ to: string }>();
</script>

<template>
  <NuxtLink :to="to" class="underline text-gray-400 hover:text-gray-200 transition-colors">
    <slot />
  </NuxtLink>
</template>
