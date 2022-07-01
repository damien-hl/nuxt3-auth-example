export default defineNuxtRouteMiddleware(async (_to, _from) => {
  const isAdmin = useAdmin()

  if (!isAdmin.value)
    return navigateTo({ name: 'login' })
})
