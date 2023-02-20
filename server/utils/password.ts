import { hash, verify } from 'argon2'

export const hashPassword = async (password: string) => {
  return await hash(password)
}

export const verifyPassword = async (password: string, hash: string) => {
  return await verify(hash, password)
}
