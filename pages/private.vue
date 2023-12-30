<script lang="ts" setup>
definePageMeta({
  middleware: ["user-only"],
});

const currentUser = useAuthUser();
</script>

<template>
  <div>
    <PageTitle title="Private page" />
    <PageDescription description="This page should only be visible if user is connected" />
    <PageUser :user="currentUser" />
  </div>
</template>
