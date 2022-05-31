<script lang="ts" setup>
const { user: currentUser } = useAuth();
</script>

<template>
    <div>
        <h1 class="mb-3 text-lg font-bold text-light-100">Home</h1>

        <p class="mb-3 text-light-100">Simple authentification example using Nuxt3</p>
        
        <code class="mb-3 block text-light-100">
            <pre>current user: {{ JSON.stringify(currentUser, null, 2) }}</pre>
        </code>
    </div>
</template>