<script lang="ts" setup>
const formPending = ref(false)

const onLogin = (credentials: { email: string; password: string; rememberMe: boolean }) => {
  formPending.value = true
  // eslint-disable-next-line no-console
  console.log(credentials)

  setTimeout(() => {
    formPending.value = false
  }, 1000)
}
</script>

<template>
  <div class="container mx-auto">
    <div class="mx-auto max-w-sm pt-32">
      <h1 class="mb-3 text-xl font-bold dark:text-white">Login page</h1>
      <p class="mb-3 dark:text-white">This page should only be accessible to guests</p>
      <LoginForm :pending="formPending" class="mt-6" @submit="onLogin" />
    </div>
  </div>
</template>
