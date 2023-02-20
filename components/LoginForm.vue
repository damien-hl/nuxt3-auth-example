<script lang="ts" setup>
const props = defineProps<{
  pending: boolean
}>()

const emit = defineEmits<{
  (e: 'submit', payload: { email: string; password: string; rememberMe: boolean }): void
}>()

const onLoginFormSubmit = (event: Event) => {
  const fd = new FormData(event.target as HTMLFormElement)

  emit('submit', {
    email: fd.get('email') as string,
    password: fd.get('password') as string,
    rememberMe: fd.get('remember-me') === 'on',
  })
}
</script>

<template>
  <form @submit.prevent="onLoginFormSubmit">
    <fieldset :disabled="props.pending">
      <div class="mb-4">
        <label for="email" class="mb-1 block text-sm dark:text-white">Address email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="admin@domain.ltd"
          required
          class="w-full dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
        />
        <span class="text-sm dark:text-gray-400">Try `admin@domain.ltd` or `user.domain.ltd`</span>
      </div>
      <div class="mb-4">
        <label for="password" class="mb-1 block text-sm dark:text-white">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          required
          class="w-full dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
        />
        <span class="text-sm dark:text-gray-400">Try `password`</span>
      </div>
      <div class="mb-4">
        <label for="remember-me" class="mb-1 flex items-center space-x-2 text-sm dark:text-white">
          <input id="remember-me" type="checkbox" name="remember-me" />
          <span>Remember me?</span>
        </label>
      </div>
      <div>
        <button
          type="submit"
          class="w-full bg-blue-500 px-2 py-3 text-white enabled:hover:bg-blue-600 disabled:bg-blue-800"
        >
          <span v-if="pending">Loading...</span>
          <span v-else>Login</span>
        </button>
      </div>
    </fieldset>
  </form>
</template>
