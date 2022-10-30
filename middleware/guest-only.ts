export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useAuthUser()

  if (user.value) {
    if (process.server)
      return navigateTo({ name: 'index' })

    return abortNavigation()
  }
})
