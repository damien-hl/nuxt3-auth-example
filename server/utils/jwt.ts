import type { CompatibilityEvent } from 'h3'
import type { JwtPayload } from 'jsonwebtoken'

import jwt from 'jsonwebtoken'
import { getUserById } from '~~/server/models/user'

export function signJwt<T extends JwtPayload>(obj: T, secret: string, options?: jwt.SignOptions) {
  return jwt.sign(obj, secret, options)
}

export function decodeJwt(token: string) {
  return jwt.decode(token)
}

export function verifyJwt<T extends JwtPayload>(token: string, secret: string, options?: jwt.SignOptions) {
  return jwt.verify(token, secret, options) as T
}

export async function getUserFromEvent(event: CompatibilityEvent) {
  const config = useRuntimeConfig()

  const cookie = useCookies(event)[config.cookieName]

  if (!cookie)
    return null

  const payload = verifyJwt(cookie, config.jwtSecret)

  if (!payload)
    return null

  return getUserById(payload.userId)
}
