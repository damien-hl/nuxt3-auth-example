<script lang="ts" setup>
const color = useColorMode()

const toggleDark = () => {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

const formPending = ref(false)

const auth = useAuth()

const onLogout = async () => {
  try {
    formPending.value = true

    await handleLogout()
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  } finally {
    formPending.value = false
  }
}
</script>

<template>
  <header>
    <div class="container mx-auto">
      <div class="flex items-center">
        <nav class="flex space-x-2">
          <NuxtLink to="/" class="p-2 dark:text-white">Home</NuxtLink>
          <NuxtLink v-if="auth.isLoggedIn.value" to="/profile" class="p-2 dark:text-white">Profile</NuxtLink>
          <NuxtLink v-else to="/public" class="p-2 dark:text-white">Public</NuxtLink>
          <NuxtLink v-if="auth.isAdmin.value" to="/admin" class="p-2 dark:text-white">Admin</NuxtLink>
        </nav>
        <div class="ml-auto flex items-center space-x-2">
          <LogoutForm v-if="auth.isLoggedIn.value" :pending="formPending" @submit="onLogout" />
          <NuxtLink v-else to="/login" class="p-2 dark:text-white">Login</NuxtLink>
          <button class="ml-auto p-2" @click="toggleDark()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5 dark:text-white"
            >
              <use xlink:href="/icons.svg#sun" class="hidden dark:block" />
              <use xlink:href="/icons.svg#moon" class="block dark:hidden" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
