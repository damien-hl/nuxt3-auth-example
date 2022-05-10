<script lang="ts" setup>
definePageMeta({
    middleware: ['user-only']
})

const user = useState('user', () => null)

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
    <div>
        <h1 class="mb-3 text-lg font-bold text-light-100">Page privée</h1>
        <p class="mb-3 text-light-100">Cette page ne devrait s'afficher que si l'utilisateur est connecté</p>
        <code class="mb-3 block text-light-100">
            <pre>utilisateur: {{ JSON.stringify(user, null, 2) }}</pre>
        </code>
        <button @click="onLogoutClick" class="mb-3 py-1 px-2 rounded bg-light-100">Se déconnecter</button>
    </div>
</template>