<script lang="ts" setup>
const currentUser = useAuthUser();
</script>

<template>
  <div>
    <PageTitle title="Account page" />
    <PageDescription description="This page should only be visible if user is connected" />
    <PageUser :user="currentUser" />
  </div>
</template>
