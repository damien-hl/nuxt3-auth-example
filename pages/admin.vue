<script lang="ts" setup>
import { User } from "~/types";

definePageMeta({
    middleware: ["admin-only"],
});

const { data: users } = await useAsyncData<User[]>("users", () =>
    $fetch("/api/users", { headers: useRequestHeaders(["cookie"]) as HeadersInit })
);

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
                <div class="table-row-group">
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
