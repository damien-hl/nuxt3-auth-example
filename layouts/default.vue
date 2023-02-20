<template>
  <NuxtLayout name="base" class="flex flex-col">
    <BaseHeader />
    <main class="flex-1">
      <slot />
    </main>
    <BaseFooter />
  </NuxtLayout>
</template>
