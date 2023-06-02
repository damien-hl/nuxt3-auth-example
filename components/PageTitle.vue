<script lang="ts" setup>
defineProps<{ title: string }>();
</script>

<template>
    <h1 mb-3 font-bold text="lg light-100">
        {{ title }}
    </h1>
</template>
