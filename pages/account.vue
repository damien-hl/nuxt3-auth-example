<script lang="ts" setup>
const currentUser = useAuthUser();
</script>

<template>
    <div>
        <h1 class="mb-3 text-lg font-bold text-light-100">Account page</h1>
        <p class="mb-3 text-light-100">This page should only be visible if user is connected</p>
        <code class="mb-3 block text-light-100">
            <pre>current user: {{ JSON.stringify(currentUser, null, 2) }}</pre>
        </code>
    </div>
</template>