<script lang="ts" setup>
definePageMeta({
  middleware: ['guest-only'],
})

const currentUser = useAuthUser()
const isAdmin = useAdmin()
const { login } = useAuth()

const form = reactive({
  data: {
    email: 'admin@gmail.com',
    password: 'password',
    rememberMe: false,
  },
  error: '',
  pending: false,
})

async function onLoginClick() {
  try {
    form.error = ''
    form.pending = true

    await login(form.data.email, form.data.password, form.data.rememberMe)

    const redirect = isAdmin.value ? '/admin' : '/private'

    await navigateTo(redirect)
  }
  catch (error: any) {
    console.error(error)

    if (error.data.message)
      form.error = error.data.message
  }
  finally {
    form.pending = false
  }
}
</script>

<template>
  <div>
    <PageTitle title="Login page" />

    <PageDescription description="This page should only be accessible to guests." />

    <p v-if="form.error" mb-3 text-red-500>
      {{ form.error }}
    </p>

    <form mb-3 flex flex-wrap gap-3 @submit.prevent="onLoginClick">
      <div w-full>
        <input id="remember-me" v-model="form.data.rememberMe" type="checkbox">

        <label for="remember-me" ml-1 text-light-100>Remember me</label>
      </div>

      <input v-model="form.data.email" type="email" placeholder="Email" required>

      <input v-model="form.data.password" type="password" placeholder="Password" required>

      <button
        type="submit" :disabled="form.pending"
        py-1 px-2 rounded bg-light-100 hover="bg-light-700" transition-colors
      >
        Login
      </button>
    </form>

    <div mb-3 flex gap-3>
      <div>
        <p text-light-100>
          Try this user credentials:
        </p>

        <p text-light-100>
          email: <code>user@gmail.com</code>
          <br>
          password: <code>password</code>
        </p>
      </div>

      <div>
        <p text-light-100>
          Try this admin credentials:
        </p>

        <p text-light-100>
          email: <code>admin@gmail.com</code>
          <br>
          password: <code>password</code>
        </p>
      </div>
    </div>

    <PageUser :user="currentUser" />
  </div>
</template>
