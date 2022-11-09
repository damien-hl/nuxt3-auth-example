export interface User {
  id: string;
  email: string;
  password: string;
  role: number;
}

export type UserWithoutPassword = Omit<User, 'password'>;
