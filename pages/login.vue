<script lang="ts" setup>
definePageMeta({
    middleware: ['guest-only']
})

const user = useState('user', () => null)

const form = reactive({
    data: {},
    pending: false,
})

async function login() {
    try {
        user.value = await $fetch('/api/auth/login', {
            method: 'POST',
            body: form.data
        })

        if (user.value.roles.includes('ADMIN')) {
            await navigateTo('/admin')
        } else {
            await navigateTo('/private')
        }
    } catch (error) {
        console.error(error);
    } finally {
        form.pending = false
    }
}

async function onLoginClick(choice: 'user' | 'admin') {
    form.pending = true

    if (choice === "user") {
        form.data = { email: "user@gmail.com", password: "password" }
    }

    if (choice === "admin") {
        form.data = { email: "admin@gmail.com", password: "password" }
    }

    await login()
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
            <pre>utilisateur: {{ JSON.stringify(user, null, 2) }}</pre>
        </code>
    </div>
</template>