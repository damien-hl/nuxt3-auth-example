<script lang="ts" setup>
definePageMeta({
    middleware: ['guest-only']
})

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
        
        await navigateTo('/private')
    } catch (error) {
        console.error(error);        
    }
}
</script>

<template>
    <div>
        <h1 class="mb-3 text-lg font-bold text-light-100">Page privée</h1>
        <p class="mb-3 text-light-100">Cette page ne devrait s'afficher que si l'utilisateur n'est <span
                class="font-bold">PAS</span> connecté</p>
        <code class="mb-3 block text-light-100">            
            <pre>utilisateur: {{ JSON.stringify(user, null, 2) }}</pre>
        </code>
        <button @click="onLoginClick" class="mb-3 py-1 px-2 rounded bg-light-100">Se connecter</button>
   </div>
</template>