export default defineNuxtRouteMiddleware(() => {
  const auth = useAuth()

  if (auth.isLoggedIn.value) {
    return '/profile'
  }
})
