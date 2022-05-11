<script lang="ts" setup>
const { user } = useAuth()

const form = reactive({
    pending: false,
})

const isAdmin = computed(() => user.value && user.value.roles.includes('ADMIN'))

async function onLogoutClick() {
    try {
        form.pending = true
        user.value = await $fetch('/api/auth/logout', {
            method: 'POST',
        })

        await navigateTo('/')
    } catch (error) {
        console.error(error);
    } finally {
        form.pending = false
    }
}
</script>

<template>
    <div class="min-h-screen flex flex-col bg-slate-900">
        <header class="p-3 mx-auto w-full max-w-4xl ">
            <nav class="flex gap-3">
                <NuxtLink to="/" class="underline text-gray-400 hover:text-gray-200">Accueil</NuxtLink>
                <template v-if="user">
                    <NuxtLink to="/private" class="underline text-gray-400 hover:text-gray-200 transition-colors">Privé
                    </NuxtLink>
                    <NuxtLink v-if="isAdmin" to="/admin"
                        class="underline text-gray-400 hover:text-gray-200 transition-colors">Admin</NuxtLink>
                    <button @click="onLogoutClick" :disabled="form.pending"
                        class="mb-3 ml-auto py-1 px-2 rounded bg-light-100 hover:bg-light-700 transition-colors">Se
                        déconnecter</button>
                </template>
                <template v-else>
                    <NuxtLink to="/guest" class="underline text-gray-400 hover:text-gray-200 transition-colors">Public
                    </NuxtLink>
                    <NuxtLink to="/login"
                        class="ml-auto py-1 px-2 rounded bg-light-100 hover:bg-light-700 transition-colors">Se connecter
                    </NuxtLink>
                </template>
            </nav>
        </header>
        <main class="p-3 mx-auto w-full max-w-4xl">
            <slot />
        </main>
    </div>
</template>