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
        <h1 class="mb-3 text-lg font-bold text-light-100">Login page</h1>
        <p class="mb-3 text-light-100">This page should only be accessible to guests.</p>

        <p v-if="form.error" class="mb-3 text-red-500">{{ form.error }}</p>

        <form @submit.prevent="onLoginClick" class="mb-3 flex flex-wrap gap-3">
            <div class="w-full">
                <input v-model="form.data.rememberMe" type="checkbox" id="remember-me">
                <label for="remember-me" class="ml-1 text-light-100">Remember me</label>
            </div>

            <input v-model="form.data.email" type="email" placeholder="Email" required>

            <input v-model="form.data.password" type="password" placeholder="Password" required>

            <button type="submit" :disabled="form.pending"
                class="py-1 px-2 rounded bg-light-100 hover:bg-light-700 transition-colors">Login</button>
        </form>

        <code class="mb-3 block text-light-100">
            <pre>current user: {{ JSON.stringify(currentUser, null, 2) }}</pre>
        </code>

        <div class="flex gap-3">
            <div class="flex-grow">
                <p class="text-light-100">Try this user credentials:</p>
                <p class="text-light-100">
                    email: <code>user@gmail.com</code>
                    <br>
                    password: <code>password</code>
                </p>
            </div>

            <div class="flex-grow">
                <p class="text-light-100">Try this admin credentials:</p>
                <p class="text-light-100">
                    email: <code>admin@gmail.com</code>
                    <br>
                    password: <code>password</code>
                </p>
            </div>
        </div>
    </div>
</template>