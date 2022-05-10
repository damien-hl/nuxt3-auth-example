<script lang="ts" setup>
const user = useState('user', () => null)
</script>

<template>
    <div>
        <h1 class="mb-3 text-lg font-bold text-light-100">Accueil</h1>
        <p class="mb-3 text-light-100">Simple exemple d'authentification avec Nuxt3</p>
        <code class="mb-3 block text-light-100">
            <pre>utilisateur: {{ JSON.stringify(user, null, 2) }}</pre>
        </code>
    </div>
</template>