import type { User } from '~~/types'

import { ROLES } from '~~/constants'
import prisma from '~~/server/database/client'

export async function getUserByEmail(email: string): Promise<User | null> {
  return await prisma.user.findUnique({ where: { email } })
}

export async function getUserById(id: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  })
}

export async function getUsers() {
  const users = await prisma.user.findMany()

  const usersWithoutPassword = users.map(
    ({ password: _password, ...user }) => user,
  )

  return usersWithoutPassword
}

export async function isAdmin(user: User | null): Promise<any> {
  return user && user.role === ROLES.ADMIN
}

export async function createUser(data: any) {
  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
      role: data.role !== undefined ? data.role : ROLES.USER,
    },
  })
  return user
}
