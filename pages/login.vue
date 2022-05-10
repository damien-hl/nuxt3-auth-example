<script lang="ts" setup>
const loading = useState('spinner', () => false)
const user = useState('user', () => null)

const form = reactive({
    data: {
        email: 'admin@gmail.com',
        password: 'password',
        rememberMe: false,
    },
    errors: {
        message: ''
    }
})

async function onLoginClick() {
    try {
        loading.value = true
        form.errors.message = ''
        
        user.value = await $fetch('/api/auth/login', {
            method: 'POST',
            body: { email: form.data.email, password: form.data.password, rememberMe: form.data.rememberMe }
        })
    } catch (error) {
        if (error.data.message) {
            form.errors.message = error.data.message
        }

        console.error(error);
    } finally {
        loading.value = false
    }
}

async function onLogoutClick() {
    try {
        loading.value = true
        user.value = await $fetch('/api/auth/logout', {
            method: 'POST',
        })
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div>
        <div v-if="user">
            <h1 class="mb-3 text-lg font-bold text-light-100">Connecté en tant que {{ user.email }}</h1>
            <button @click="onLogoutClick" :disabled="loading" class="py-1 px-2 rounded bg-light-100 text-dark-100">Se déconnecter</button>
        </div>
        <div v-else class="mx-auto w-full max-w-xs">
            <h1 class="mb-3 text-lg font-bold text-light-100">Connexion</h1>
            <p v-if="form.errors.message" class="mb-3 text-light-100">{{ form.errors.message }}</p>
            <div class="mb-3">
                <input v-model="form.data.email" type="email" placeholder="Adresse email" class="py-1 px-2 w-full rounded">
            </div>
            <div class="mb-3">
                <input v-model="form.data.password" type="password" placeholder="Mot de passe" class="py-1 px-2 w-full rounded">
            </div>        
            <div class="mb-3">
                <input v-model="form.data.rememberMe" type="checkbox" id="remember-me">
                <label for="remember-me" class="ml-1 text-light-100">Se souvenir de moi</label>
            </div>
            <div class="mb-3">
                <button @click="onLoginClick" :disabled="loading"
                    class="py-1 px-2 w-full rounded bg-light-100 text-dark-100 hover:bg-light-700 transition-colors">Se
                    connecter</button>
            </div>
        </div>
    </div>
</template>