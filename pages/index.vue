<script lang="ts" setup>
const currentUser = useAuthUser();
</script>

<template>
    <div>
        <PageTitle title="Home" />
        <PageDescription description="Simple authentification example using Nuxt3" />
        <PageUser :user="currentUser" />
    </div>
</template>
