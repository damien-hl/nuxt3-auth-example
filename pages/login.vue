<script lang="ts" setup>
definePageMeta({
    layout: 'auth'
})

function onLoginClick() {
    $fetch('/api/auth/login', {
        method: 'POST',
    })
    .then(data => {

    })
    .catch(error => {
        
    })
}
</script>

<template>
    <div class="flex min-h-screen flex-col justify-center">
        <div class="mx-auto px-8 w-full max-w-md">
            <h1>Connexion</h1>
            <button @click="onLoginClick">Se connecter</button>
        </div>
    </div>
</template>