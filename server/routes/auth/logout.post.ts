export default defineEventHandler(async (event) => {
  const session = await useAuthSession(event)
  await session.clear()

  return {}
})
