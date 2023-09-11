<script lang="ts" setup>
definePageMeta({
    middleware: ["guest-only"],
});

const currentUser = useAuthUser();
const isAdmin = useAdmin();

async function onLoginSuccess() {
    const redirect = isAdmin.value ? "/admin" : "/private";

    await navigateTo(redirect);
}
</script>

<template>
    <div>
        <PageTitle title="Login page" />
        <PageDescription description="This page should only be accessible to guests." />
        <FormLogin @success="onLoginSuccess" />
        <div class="mb-3 flex gap-3">
            <div>
                <p class="text-light-100">Try this user credentials:</p>
                <p class="text-light-100">
                    email: <code>user@gmail.com</code>
                    <br />
                    password: <code>password</code>
                </p>
            </div>
            <div>
                <p class="text-light-100">Try this admin credentials:</p>
                <p class="text-light-100">
                    email: <code>admin@gmail.com</code>
                    <br />
                    password: <code>password</code>
                </p>
            </div>
        </div>
        <PageUser :user="currentUser" />
    </div>
</template>
