<script lang="ts" setup>
const user = useState('user', () => null);

if (!user.value) {
    await navigateTo('/login');
}
</script>

<template>
    <div>
        <h1 class="mb-3 text-lg font-bold text-light-100">Mon compte</h1>
        <p class="text-light-100">Page visible uniquement si l'utilisateur est connecté</p>
    </div>
</template>