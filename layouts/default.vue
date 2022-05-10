<script lang="ts" setup>
const user = useState('user', () => null)

async function onLoginClick() {
    try {
        user.value = await $fetch('/api/auth/login', {
            method: 'POST',
            body: {
                email: 'admin@gmail.com',
                password: 'password',
            }
        })

        if (user.value.roles.includes('ADMIN')) {
            await navigateTo('/admin')
        } else {
            await navigateTo('/private')
        }
    } catch (error) {
        console.error(error);
    }
}

async function onLogoutClick() {
    try {
        user.value = await $fetch('/api/auth/logout', {
            method: 'POST',
        })

        await navigateTo('/')
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
    <div class="min-h-screen flex flex-col bg-slate-900">
        <header class="p-3 mx-auto w-full max-w-4xl ">
            <nav class="flex gap-3">
                <NuxtLink to="/" class="underline text-gray-400 hover:text-gray-200">Accueil</NuxtLink>
                <template v-if="user">
                    <NuxtLink to="/private" class="underline text-gray-400 hover:text-gray-200">Privé</NuxtLink>
                    <NuxtLink to="/admin" class="underline text-gray-400 hover:text-gray-200">Admin</NuxtLink>
                    <button @click="onLogoutClick" class="mb-3 ml-auto py-1 px-2 rounded bg-light-100">Se
                        déconnecter</button>
                </template>
                <template v-else>
                    <NuxtLink to="/guest" class="underline text-gray-400 hover:text-gray-200">Public</NuxtLink>
                    <button @click="onLoginClick" class="mb-3 ml-auto py-1 px-2 rounded bg-light-100">Se
                        connecter</button>
                </template>
            </nav>
        </header>
        <main class="p-3 mx-auto w-full max-w-4xl">
            <slot />
        </main>
    </div>
</template>