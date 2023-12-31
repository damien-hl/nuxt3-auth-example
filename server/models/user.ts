import type { User } from "~~/types";

// Fake users data
const users: User[] = [
  {
    id: "41dbc5f7-9a4e-42e6-832b-1d3dd8c7c4b6",
    email: "admin@gmail.com",
    password: "$2y$10$hXPea83sKsVsuf95mtEZZeIYtcFl1vLJ1BXVTEqcgKArf6/5.Zksm",
    roles: ["ADMIN"],
  },
  {
    id: "d0065700-1707-4ad9-811b-8bbed0364318",
    email: "user@gmail.com",
    password: "$2y$10$hXPea83sKsVsuf95mtEZZeIYtcFl1vLJ1BXVTEqcgKArf6/5.Zksm",
    roles: ["USER"],
  },
];

export async function getUsers() {
  return users;
}

export async function getUserByEmail(email: string) {
  return users.find((user) => user.email === email);
}

export async function getUserById(id: string) {
  return users.find((user) => user.id === id);
}

export async function isAdmin(user?: User) {
  return user && user.roles.includes("ADMIN");
}
