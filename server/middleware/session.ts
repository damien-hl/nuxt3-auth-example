import { getUserFromEvent } from '~~/server/utils/jwt'

export default defineEventHandler(async (event) => {
  const user = await getUserFromEvent(event)

  if (user)
    event.context.user = user
})
