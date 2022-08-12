import bcrypt from 'bcryptjs'

export async function hashPasswoard(plainPassword: string) {
  return bcrypt.hash(plainPassword, 10)
}

export function verifyPassword(plainPassword: string, hash: string) {
  return bcrypt.compare(plainPassword, hash)
}
