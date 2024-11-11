export interface User {
  id: string;
  email: string;
  password: string;
  roles: string[];
}

export type UserWithoutPassword = Omit<User, "password">;
