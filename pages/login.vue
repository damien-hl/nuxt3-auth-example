<script lang="ts" setup>
definePageMeta({
    layout: 'auth'
})

const user = useState('user', () => null)

async function onLoginClick() {
    try {
        user.value = await $fetch('/api/auth/login', {
            method: 'POST',
            body: { email: "admin@gmail.com", password: "password" }
        })
        console.log(user.value);    
    } catch (error) {
        console.error(error);
    }
}

async function onLogoutClick() {
    try {
        user.value = await $fetch('/api/auth/logout', {
            method: 'POST',
        })    
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
    <div class="min-h-screen">
        <div class="mx-auto px-8 w-full max-w-4xl">
            <nav>
                <NuxtLink to="/" class="text-light-100">Accueil</NuxtLink>
            </nav>
            <div v-if="user">
                <h1 class="text-light-100">Connecté en tant que {{ user.email }}</h1>
                <button @click="onLogoutClick" class="text-light-100">Se déconnecter</button>
            </div>
            <div v-else>
                <h1 class="text-light-100">Connexion</h1>
                <button @click="onLoginClick" class="text-light-100">Se connecter</button>
            </div>
        </div>
    </div>
</template>