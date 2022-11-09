export enum Role {
  ADMIN = 1,
  USER = 2,
}

export interface User {
  id: string
  email: string
  password: string
  role: Role
}

export type UserWithoutPassword = Omit<User, 'password'>
