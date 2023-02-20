export default defineNuxtRouteMiddleware(() => {
  const auth = useAuth()

  if (!auth.isLoggedIn.value || auth.session.value?.role !== 'admin') {
    return '/login'
  }
})
