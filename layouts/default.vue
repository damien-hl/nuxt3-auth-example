<template>
  <div class="min-h-screen flex flex-col">
    <BaseHeader />
    <main class="p-3 mx-auto w-full flex-1 max-w-4xl">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
