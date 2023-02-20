export const useAuth = () => useNuxtApp().$auth

export const handleLogin = async (email: string, password: string) => {
  const auth = useAuth()

  await $fetch('/auth/login', {
    method: 'POST',
    body: {
      email,
      password,
    },
  })

  await auth.updateSession()
  await navigateTo('/profile')
}

export const handleLogout = async () => {
  const auth = useAuth()

  await $fetch('/auth/logout', {
    method: 'POST',
  })

  await auth.updateSession()
  await navigateTo('/')
}
