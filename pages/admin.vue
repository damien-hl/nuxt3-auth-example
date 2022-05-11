<script lang="ts" setup>
definePageMeta({
    middleware: ['admin-only']
})

const { data: users } = await useAsyncData('users', () => $fetch('/api/users', { headers: useRequestHeaders(['cookie']) }))

const { user: currentUser } = useAuth()
</script>

<template>
    <div>
        <h1 class="mb-3 text-lg font-bold text-light-100">Page privée pour les administrateurs</h1>
        <p class="mb-3 text-light-100">Cette page ne devrait s'afficher que si l'utilisateur est connecté et est un
            administrateur</p>
        <code class="mb-3 block text-light-100">
            <pre>utilisateur: {{ JSON.stringify(currentUser, null, 2) }}</pre>
        </code>
        <div class="mb-3 text-light-100">
            <div class="table w-full">
                <div class="table-header-group font-bold">
                    <div class="table-row">
                        <div class="py-3 table-cell text-left">ID</div>
                        <div class="py-3 table-cell text-left">Email</div>
                        <div class="py-3 table-cell text-left">Roles</div>
                    </div>
                </div>
                <div class="table-row-group">
                    <div v-for="user in users" :key="user.id" class="table-row">
                        <div class="table-cell">{{ user.id }}</div>
                        <div class="table-cell">{{ user.email }}</div>
                        <div class="table-cell">{{ user.roles.join(', ') }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>