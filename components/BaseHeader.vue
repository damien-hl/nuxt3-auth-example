<script lang="ts" setup>
const isDark = useDark()
const toggleDark = useToggle(isDark)

const formPending = ref(false)

const onLogout = () => {
  formPending.value = true

  setTimeout(() => {
    formPending.value = false
  }, 1000)
}
</script>

<template>
  <header>
    <div class="container mx-auto">
      <div class="flex items-center">
        <nav class="flex space-x-2">
          <NuxtLink to="/" class="p-2 dark:text-white">Home</NuxtLink>
          <NuxtLink to="/public" class="p-2 dark:text-white">Public</NuxtLink>
          <NuxtLink to="/profile" class="p-2 dark:text-white">Profile</NuxtLink>
          <NuxtLink to="/admin" class="p-2 dark:text-white">Admin</NuxtLink>
        </nav>
        <div class="ml-auto flex items-center space-x-2">
          <NuxtLink to="/login" class="p-2 dark:text-white">Login</NuxtLink>
          <LogoutForm :pending="formPending" @submit="onLogout" />
          <button class="ml-auto p-2" @click="toggleDark()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5 dark:text-white"
            >
              <use v-if="isDark" xlink:href="/icons.svg#sun" />
              <use v-else xlink:href="/icons.svg#moon" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
