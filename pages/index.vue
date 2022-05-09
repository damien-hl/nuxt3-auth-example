<script lang="ts" setup>
definePageMeta({
    layout: 'default'
})
</script>

<template>
    <div class="flex min-h-screen">
        <div class="mx-auto px-8 w-full max-w-4xl">
            <nav>
                <NuxtLink to="/login" class="text-light-100">Connexion</NuxtLink>
            </nav>
            <h1 class="text-light-100">Accueil</h1>
        </div>
    </div>
</template>