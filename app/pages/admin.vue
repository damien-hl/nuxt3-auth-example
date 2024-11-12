<script lang="ts" setup>
definePageMeta({
  middleware: ["admin-only"],
});

const { data: users } = await useFetch("/api/users");

const currentUser = useAuthUser();
</script>

<template>
  <div>
    <PageTitle title="Admin page" />
    <PageDescription description="This page should only be visible if user is connected and has admin role" />
    <PageUser :user="currentUser" />
    <div class="mb-3 text-light-100">
      <div class="table w-full">
        <div class="table-header-group font-bold">
          <div class="table-row">
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Roles</TableHeaderCell>
          </div>
        </div>
        <div v-if="users" class="table-row-group">
          <div v-for="user in users" :key="user.id" class="table-row">
            <TableBodyCell>{{ user.id }}</TableBodyCell>
            <TableBodyCell>{{ user.email }}</TableBodyCell>
            <TableBodyCell>{{ user.roles.join(", ") }}</TableBodyCell>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
