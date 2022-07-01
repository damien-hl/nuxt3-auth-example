export default defineNuxtRouteMiddleware(async (_to, _from) => {
  const user = useAuthUser()

  if (!user.value)
    return navigateTo({ name: 'login' })
})
