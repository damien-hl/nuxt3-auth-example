import { getUsers, isAdmin } from '~~/server/models/user'

export default defineEventHandler(async (event) => {
  if (!isAdmin(event.context.user)) {
    return createError({
      statusCode: 401,
      message: 'You don\'t have the rights to access this resource',
    })
  }

  const usersWithPassword = await getUsers()

  const usersWithoutPassword = usersWithPassword.map(({ password: _password, ...user }) => user)

  return usersWithoutPassword
})
