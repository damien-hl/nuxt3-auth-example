<script lang="ts" setup>
const loading = useState('spinner', () => false)
const user = useState('user', () => null)

async function onLoginClick() {
    try {
        loading.value = true
        user.value = await $fetch('/api/auth/login', {
            method: 'POST',
            body: { email: "admin@gmail.com", password: "password" }
        })  
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false
    }
}

async function onLogoutClick() {
    try {
        loading.value = true
        user.value = await $fetch('/api/auth/logout', {
            method: 'POST',
        })    
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="min-h-screen">
        <div class="mx-auto px-8 w-full max-w-4xl">
            <nav>
                <NuxtLink to="/" class="underline text-gray-500">Accueil</NuxtLink>
            </nav>
            <div v-if="user">
                <h1 class="text-lg font-bold text-light-100">Connecté en tant que {{ user.email }}</h1>
                <button @click="onLogoutClick" class="py-1 px-2 rounded bg-light-100 text-dark-100">Se déconnecter</button>
            </div>
            <div v-else>
                <h1 class="text-lg font-bold text-light-100">Connexion</h1>
                <button @click="onLoginClick" class="py-1 px-2 rounded bg-light-100 text-dark-100">Se connecter</button>
            </div>
        </div>
    </div>
</template>