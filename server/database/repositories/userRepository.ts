import prisma from '~~/server/database/client';
import { User, UserWithoutPassword } from '~~/types';

export async function getUserByEmail(email: string): Promise<User | null> {
  return await prisma.user.findUnique({ where: { email: email } });
}

export async function getUserById(id: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
}

export async function getUsers(): Promise<any> {
  const users = await prisma.user.findMany();

  const usersWithoutPassword = users.map(
    ({ password: _password, ...user }) => user
  );

  return usersWithoutPassword;
}

export async function isAdmin(user: any): Promise<any> {
  return user && user.role == 1;
}

export async function createUser(data: any): Promise<any> {
  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
      role: data.role != undefined ? data.role : 2, // 2 = user role
    },
  });
  return user;
}
