<script lang="ts" setup>
definePageMeta({
  middleware: ['admin-only'],
})

const { data: users } = await useAsyncData('users', () => $fetch('/api/users', { headers: useRequestHeaders(['cookie']) }))

const currentUser = useAuthUser()
</script>

<template>
  <div>
    <PageTitle title="Admin page" />

    <PageDescription description="This page should only be visible if user is connected and has admin role" />

    <PageUser :user="currentUser" />

    <div mb-3 text-light-100>
      <div table w-full>
        <div table-header-group font-bold>
          <div table-row>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
          </div>
        </div>
        <div table-row-group>
          <div v-for="user in users" :key="user.id" table-row>
            <TableBodyCell>{{ user.id }}</TableBodyCell>
            <TableBodyCell>{{ user.email }}</TableBodyCell>
            <TableBodyCell>{{ user.role == 1 ? 'Admin' : 'User' }}</TableBodyCell>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
