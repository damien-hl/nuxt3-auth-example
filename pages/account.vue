<script lang="ts" setup>
const { user: currentUser } = useAuth();
</script>

<template>
    <div>
        <h1 class="mb-3 text-lg font-bold text-light-100">Page du compte des utilisateurs</h1>
        <p class="mb-3 text-light-100">Cette page ne devrait s'afficher que si l'utilisateur est connecté</p>
        <code class="mb-3 block text-light-100">
            <pre>utilisateur: {{ JSON.stringify(currentUser, null, 2) }}</pre>
        </code>
    </div>
</template>