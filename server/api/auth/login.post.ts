import { getUserByEmail } from '~~/server/database/repositories/userRepository'
import { verifyPassword } from '~~/server/utils/password'
import { signJwt } from '~~/server/utils/jwt'

export default defineEventHandler(async (event) => {
  const body = await useBody<{
    email: string
    password: string
    rememberMe: boolean
  }>(event)

  const { email, password, rememberMe } = body

  if (!email || !password) {
    return createError({
      statusCode: 400,
      message: 'Email address and password are required',
    })
  }

  const userWithPassword = await getUserByEmail(email)

  if (!userWithPassword) {
    return createError({
      statusCode: 401,
      message: 'Bad credentials',
    })
  }

  const verified = await verifyPassword(password, userWithPassword.password)

  if (!verified) {
    return createError({
      statusCode: 401,
      message: 'Bad credentials',
    })
  }

  const config = useRuntimeConfig()

  const token = signJwt({ userId: userWithPassword.id }, config.jwtSecret)

  setCookie(event, config.cookieName, token, {
    httpOnly: true, // If you don't need the cookie to be accessible from browser
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    expires: rememberMe
      ? new Date(Date.now() + config.cookieRememberMeExpires)
      : new Date(Date.now() + config.cookieExpires),
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...userWithoutPassword } = userWithPassword

  return {
    user: userWithoutPassword,
  }
})
