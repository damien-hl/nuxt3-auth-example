<script lang="ts" setup>
definePageMeta({
    middleware: ['guest-only']
})

const { user } = useAuth()
</script>

<template>
    <div>
        <h1 class="mb-3 text-lg font-bold text-light-100">Page invitée</h1>
        <p class="mb-3 text-light-100">Cette page ne devrait s'afficher que si l'utilisateur n'est <span
                class="font-bold">PAS</span> connecté</p>
        <code class="mb-3 block text-light-100">            
            <pre>utilisateur: {{ JSON.stringify(user, null, 2) }}</pre>
        </code>
    </div>
</template>