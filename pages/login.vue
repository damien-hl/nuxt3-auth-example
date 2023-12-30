<script lang="ts" setup>
definePageMeta({
  middleware: ["guest-only"],
  layout: false,
});

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

const isAdmin = useAdmin();

async function onLoginClick() {
  try {
    form.error = "";
    form.pending = true;

    await login(form.data.email, form.data.password, form.data.rememberMe);

    const redirect = isAdmin.value ? "/admin" : "/private";
    await navigateTo(redirect);
  } catch (error: any) {
    console.error(error);

    if (error.data.message) form.error = error.data.message;
  } finally {
    form.pending = false;
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header>
      <h1 class="my-24 font-bold text-2xl text-center">Login to your account</h1>
    </header>
    <main class="mx-auto p-8 max-w-sm w-full">
      <form class="mb-12" @submit.prevent="onLoginClick">
        <p
          v-if="form.error"
          class="mb-3 px-3 py-1.5 w-full border rounded border-red-400 text-sm text-center text-red-400"
        >
          {{ form.error }}
        </p>
        <div class="mb-3">
          <input
            v-model="form.data.email"
            type="email"
            placeholder="Email"
            class="px-3 py-1.5 w-full border rounded border-slate-700 bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent"
            required
          />
        </div>
        <div class="mb-3">
          <input
            v-model="form.data.password"
            type="password"
            placeholder="Password"
            class="px-3 py-1.5 w-full border rounded border-slate-700 bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent"
            required
          />
        </div>
        <div class="mb-3 flex justify-end items-center">
          <label for="remember-me" class="mr-1 text-sm text-light-100">Remember me</label>
          <input
            id="remember-me"
            v-model="form.data.rememberMe"
            type="checkbox"
            class="w-4 h-4 accent-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent"
          />
        </div>
        <div>
          <button
            type="submit"
            :disabled="form.pending"
            class="px-3 py-1.5 w-full rounded bg-light-100 font-semibold text-sm text-slate-950 hover:bg-light-700 focus:outline-none focus:bg-light-700 transition-colors"
          >
            Sign in
          </button>
        </div>
      </form>
      <div class="text-center">
        <NuxtLink to="/" class="text-xs text-slate-400 transition-colors hover:text-light-100">Go back home</NuxtLink>
      </div>
    </main>
    <BaseFooter class="mt-auto" />
  </div>
</template>
