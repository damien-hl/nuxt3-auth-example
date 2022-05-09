<script lang="ts" setup>
const user = useState('user', () => null)

const { data } = await useAsyncData('me', () => $fetch('/api/auth/me', { headers: useRequestHeaders(["cookie"]) }))

user.value = data
</script>

<template>
    <div class="bg-slate-900">
        <main>
            <slot />
        </main>
    </div>
</template>