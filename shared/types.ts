import type { User as UserWithPassword } from "~~/server/lib/user";

export type User = Omit<UserWithPassword, "password">;
