export default defineEventHandler(async (event) => {
  const session = await useAuthSession(event)

  return session.data
})
