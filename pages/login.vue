<script lang="ts" setup>
definePageMeta({ middleware: 'is-guest' })

const formPending = ref(false)

const onLogin = async (credentials: { email: string; password: string }) => {
  try {
    formPending.value = true

    await handleLogin(credentials.email, credentials.password)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  } finally {
    formPending.value = false
  }
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
