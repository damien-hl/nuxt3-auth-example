<script lang="ts" setup>
definePageMeta({
    middleware: ['admin-only']
})

const user = useState('user', () => null)
</script>

<template>
    <div>
        <h1 class="mb-3 text-lg font-bold text-light-100">Page privée pour les administrateurs</h1>
        <p class="mb-3 text-light-100">Cette page ne devrait s'afficher que si l'utilisateur est connecté et est un administrateur</p>
        <code class="mb-3 block text-light-100">
            <pre>utilisateur: {{ JSON.stringify(user, null, 2) }}</pre>
        </code>
    </div>
</template>