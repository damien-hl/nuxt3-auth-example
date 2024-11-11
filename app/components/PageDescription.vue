<script lang="ts" setup>
defineProps<{ description: string }>();
</script>

<template>
  <p class="mb-3 text-lg text-light-100">
    {{ description }}
  </p>
</template>
