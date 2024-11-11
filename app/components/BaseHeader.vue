<script lang="ts" setup>
const currentUser = useAuthUser();
const isAdmin = useAdmin();
const { logout } = useAuth();

const form = reactive({
  pending: false,
});

async function onLogoutClick() {
  try {
    form.pending = true;

    await logout();

    await navigateTo("/");
  } catch (error) {
    console.error(error);
  } finally {
    form.pending = false;
  }
}
</script>

<template>
  <header class="bg-slate-900">
    <div class="p-3 mx-auto w-full max-w-4xl">
      <nav class="flex gap-3">
        <NuxtLink to="/" class="flex flex-col text-center">
          <span class="font-bold text-lg uppercase leading-none">Auth</span>
          <span class="text-sm leading-none text-slate-400">example</span>
        </NuxtLink>
        <div class="ml-auto flex items-center gap-3">
          <template v-if="currentUser">
            <NuxtLink to="/private" class="px-3 font-semibold">Private</NuxtLink>
            <NuxtLink v-if="isAdmin" to="/admin" class="px-3 font-semibold">Admin</NuxtLink>
            <button
              class="py-1.5 px-3 rounded bg-light-100 font-semibold text-sm text-slate-950 hover:bg-light-700 transition-colors"
              :disabled="form.pending"
              @click="onLogoutClick"
            >
              Logout
            </button>
          </template>
          <template v-else>
            <NuxtLink to="/guest" class="px-3 font-semibold">Public</NuxtLink>
            <NuxtLink to="/login" class="px-3 font-semibold">Login</NuxtLink>
          </template>
        </div>
      </nav>
    </div>
  </header>
</template>
