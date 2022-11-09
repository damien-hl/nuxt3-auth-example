<script lang="ts" setup>
const emit = defineEmits(['success'])

const { register } = useAuth()

const form = reactive({
  data: {
    email: 'newUser@gmail.com',
    password: 'password',
    rememberMe: false,
  },
  error: '',
  pending: false,
})

async function onRegisterClick() {
  try {
    form.error = ''
    form.pending = true
    await register(form.data.email, form.data.password, form.data.rememberMe)
    emit('success')
  }
  catch (error: any) {
    if (error.data.message)
      form.error = error.data.message
  }
  finally {
    form.pending = false
  }
}
</script>

<template>
  <p v-if="form.error" mb-3 text-red-500>
    {{ form.error }}
  </p>

  <form mb-3 flex flex-wrap gap-3 @submit.prevent="onRegisterClick">
    <div w-full>
      <input id="remember-me" v-model="form.data.rememberMe" type="checkbox">

      <label for="remember-me" ml-1 text-light-100>Remember me</label>
    </div>

    <input v-model="form.data.email" type="email" placeholder="Email" required>

    <input v-model="form.data.password" type="password" placeholder="Password" required>

    <button type="submit" :disabled="form.pending" py-1 px-2 rounded bg-light-100 hover="bg-light-700"
      transition-colors>
      Register
    </button>
  </form>
</template>
