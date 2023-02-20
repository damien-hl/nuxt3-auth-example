export default defineEventHandler(async (event) => {
  const session = await useAuthSession(event)

  const { email, password } = await readBody(event)

  const user = await findUserByEmail(email)
  if (!user) {
    throw createError({
      statusCode: 40,
      message: 'Invalid credentials',
    })
  }

  const isPasswordMatching = await verifyPassword(password, user.password)
  if (!isPasswordMatching) {
    throw createError({
      statusCode: 400,
      message: 'Invalid credentials',
    })
  }

  await session.update({
    id: user.id,
    email: user.email,
    role: user.role,
  })

  return session
})
