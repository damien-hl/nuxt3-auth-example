<script lang="ts" setup>
definePageMeta({
    middleware: ['guest-only']
})

const { user: currentUser, login } = useAuth()

const form = reactive({
    data: {
        email: '',
        password: ''
    },
    pending: false,
})

async function onLoginClick(choice: 'user' | 'admin') {
    try {
        form.pending = true

        if (choice === "user") {
            await login("user@gmail.com", "password")
            await navigateTo('/private')
        }

        if (choice === "admin") {
            await login("admin@gmail.com", "password")
            await navigateTo('/admin')
        }
    } catch (error) {
        console.error(error);
    } finally {
        form.pending = false
    }
}
</script>

<template>
    <div>
        <h1 class="mb-3 text-lg font-bold text-light-100">Page de connexion</h1>
        <p class="mb-3 text-light-100">Cette page ne devrait s'afficher que si l'utilisateur n'est <span
                class="font-bold">PAS</span> connecté</p>
        <p class="mb-3 text-light-100">Se connecter en tant que</p>
        <div class="mb-3 flex gap-3">
            <button @click="onLoginClick('user')" :disabled="form.pending"
                class="py-1 px-2 rounded bg-light-100 hover:bg-light-700 transition-colors">Utilisateur</button>
            <button @click="onLoginClick('admin')" :disabled="form.pending"
                class="py-1 px-2 rounded bg-light-100 hover:bg-light-700 transition-colors">Administrateur</button>
        </div>
        <code class="mb-3 block text-light-100">
            <pre>utilisateur: {{ JSON.stringify(currentUser, null, 2) }}</pre>
        </code>
    </div>
</template>