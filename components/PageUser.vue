<script lang="ts" setup>
import type { UserWithoutPassword } from "~/types";

defineProps<{ user: UserWithoutPassword | null }>();
</script>

<template>
    <code class="block mb-3 text-lg text-light-100">
        <pre>current user: {{ JSON.stringify(user, null, 2) }}</pre>
    </code>
</template>
