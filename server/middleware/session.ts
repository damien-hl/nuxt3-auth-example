import { getSession } from '~~/server/utils/session'

export default defineEventHandler(async (event) => {
  const user = await getSession(event)

  if (user)
    event.context.user = user
})
