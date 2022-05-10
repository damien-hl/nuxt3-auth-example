<script lang="ts" setup>
const user = useState('user', () => null)

const { data } = await useAsyncData('me', () => $fetch('/api/auth/me', { headers: useRequestHeaders(["cookie"]) }))

user.value = data
</script>

<template>
    <div class="min-h-screen flex flex-col bg-slate-900">
        <header class="p-3 mx-auto w-full max-w-4xl ">
            <nav class="flex gap-3">
                <NuxtLink to="/" class="underline text-gray-400 hover:text-gray-200">Accueil</NuxtLink>
                <NuxtLink to="/login" class="ml-auto underline text-gray-400 hover:text-gray-200">Connexion</NuxtLink>
            </nav>
        </header>
        <main class="p-3 mx-auto w-full max-w-4xl">
            <slot />
        </main>
    </div>
</template>