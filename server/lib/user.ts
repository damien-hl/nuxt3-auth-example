export interface User {
  id: string;
  email: string;
  password: string;
  roles: string[];
}

// Fake users data
const users: User[] = [
  {
    id: "41dbc5f7-9a4e-42e6-832b-1d3dd8c7c4b6",
    email: "admin@gmail.com",
    password: "$argon2id$v=19$m=19456,t=2,p=1$d39TKJ2+/qO+d5zjUfpp+A$z/ZBaHVbCfYQT/fSrpz8dc3Kz/rox7oEB7hLGeZzVLU", // password
    roles: ["ADMIN"],
  },
  {
    id: "d0065700-1707-4ad9-811b-8bbed0364318",
    email: "user@gmail.com",
    password: "$argon2id$v=19$m=19456,t=2,p=1$d39TKJ2+/qO+d5zjUfpp+A$z/ZBaHVbCfYQT/fSrpz8dc3Kz/rox7oEB7hLGeZzVLU", // password
    roles: ["USER"],
  },
];

export async function findAllUsers() {
  return users;
}

export async function findUserByEmail(email: string) {
  return users.find((user) => user.email === email);
}

export async function findUserById(id: string) {
  return users.find((user) => user.id === id);
}

export async function isAdmin(user?: User) {
  return user && user.roles.includes("ADMIN");
}
