<script lang="ts" setup>
definePageMeta({
  middleware: ['guest-only'],
})

const currentUser = useAuthUser()
const isAdmin = useAdmin()

async function onRegistrationSuccess() {
  const redirect = isAdmin.value ? '/admin' : '/private'

  await navigateTo(redirect)
}
</script>

<template>
  <div>
    <PageTitle title="Registration page" />

    <PageDescription description="This page should only be accessible to guests." />

    <FormRegistration @success="onRegistrationSuccess" />

    <PageUser :user="currentUser" />
  </div>
</template>
