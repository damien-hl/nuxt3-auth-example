<script lang="ts" setup>
const emit = defineEmits(["success"]);

const { login } = useAuth();

const form = reactive({
  data: {
    email: "admin@gmail.com",
    password: "password",
    rememberMe: false,
  },
  error: "",
  pending: false,
});

async function onLoginClick() {
  try {
    form.error = "";
    form.pending = true;

    await login(form.data.email, form.data.password, form.data.rememberMe);

    emit("success");
  } catch (error: any) {
    console.error(error);

    if (error.data.message) form.error = error.data.message;
  } finally {
    form.pending = false;
  }
}
</script>

<template>
  <p v-if="form.error" class="mb-3 text-sm text-red-500">
    {{ form.error }}
  </p>
  <form class="mb-3 flex flex-wrap gap-3" @submit.prevent="onLoginClick">
    <div class="w-full flex items-center">
      <input id="remember-me" v-model="form.data.rememberMe" type="checkbox" class="w-4 h-4 accent-slate-700" />
      <label for="remember-me" class="ml-1 text-sm text-light-100">Remember me</label>
    </div>
    <input
      v-model="form.data.email"
      type="email"
      placeholder="Email"
      class="px-3 py-1.5 border rounded border-slate-700 bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent"
      required
    />
    <input
      v-model="form.data.password"
      type="password"
      placeholder="Password"
      class="px-3 py-1.5 border rounded border-slate-700 bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent"
      required
    />
    <button
      type="submit"
      :disabled="form.pending"
      class="px-3 py-1.5 rounded bg-light-100 font-semibold text-sm text-slate-950 hover:bg-light-700 focus:outline-none focus:bg-light-700 transition-colors"
    >
      Sign in
    </button>
  </form>
</template>
