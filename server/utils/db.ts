export type User = {
  id: string
  email: string
  password: string
  role: string
}

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
}

const users: User[] = [
  {
    id: '1',
    email: 'admin@domain.ltd',
    password: '$argon2id$v=19$m=65536,t=3,p=4$NOwFfQTVWn/c3+kvO3bxOw$RUfBvVrFNYcZ30UbjbAYOPD8A02EXDy+1O7g1VJ6XgQ', // password
    role: ROLES.ADMIN,
  },
  {
    id: '1',
    email: 'user@domain.ltd',
    password: '$argon2id$v=19$m=65536,t=3,p=4$NOwFfQTVWn/c3+kvO3bxOw$RUfBvVrFNYcZ30UbjbAYOPD8A02EXDy+1O7g1VJ6XgQ', // password
    role: ROLES.USER,
  },
]

export async function findUserByEmail(email: string): Promise<User | null> {
  return await new Promise((resolve) => {
    const user = users.find((u) => u.email === email) || null

    return resolve(user)
  })
}
