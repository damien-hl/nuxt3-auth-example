<script lang="ts" setup>
definePageMeta({
  middleware: ["guest-only"],
});

const currentUser = useAuthUser();
</script>

<template>
  <div>
    <PageTitle title="Guest page" />
    <PageDescription description="This page should only be accessible to guests." />
    <PageUser :user="currentUser" />
  </div>
</template>
