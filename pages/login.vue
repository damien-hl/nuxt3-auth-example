<script lang="ts" setup>
definePageMeta({
    middleware: ['guest-only']
});

const { user: currentUser, isAdmin, login } = useAuth();

const form = reactive({
    data: {
        email: 'admin@gmail.com',
        password: 'password',
        rememberMe: false
    },
    error: '',
    pending: false,
})

async function onLoginClick() {
    try {
        form.error = '';
        form.pending = true;

        await login(form.data.email, form.data.password, form.data.rememberMe);

        const redirect = isAdmin.value ? '/admin' : '/private';
        
        await navigateTo(redirect)
    } catch (error) {
        console.error(error);

        if (error.data.message) {
            form.error = error.data.message;
        }
    } finally {
        form.pending = false;
    }
}
</script>

<template>
    <div>
        <h1 class="mb-3 text-lg font-bold text-light-100">Page de connexion</h1>
        <p class="mb-3 text-light-100">Cette page ne devrait s'afficher que si l'utilisateur n'est <span
                class="font-bold">PAS</span> connecté</p>

        <p v-if="form.error" class="mb-3 text-red-500">{{ form.error }}</p>

        <form @submit.prevent="onLoginClick" class="mb-3 flex flex-wrap gap-3">
            <div class="w-full">
                <input v-model="form.data.rememberMe" type="checkbox" id="remember-me">
                <label for="remember-me" class="ml-1 text-light-100">Se souvenir de moi</label>
            </div>
            <input v-model="form.data.email" type="email" placeholder="Adresse email" required>
            <input v-model="form.data.password" type="password" placeholder="Mot de passe" required>
            <button type="submit" :disabled="form.pending"
                class="py-1 px-2 rounded bg-light-100 hover:bg-light-700 transition-colors">Connexion</button>
        </form>

        <code class="mb-3 block text-light-100">
            <pre>utilisateur: {{ JSON.stringify(currentUser, null, 2) }}</pre>
        </code>
    </div>
</template>