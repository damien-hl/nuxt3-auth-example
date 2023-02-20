import type { AuthSession } from '~~/server/utils/session'

export default defineNuxtPlugin(async () => {
  const { data: session, refresh: updateSession } = await useFetch<AuthSession>('/auth/session')

  const isLoggedIn = computed(() => !!session.value?.email)

  const isAdmin = computed(() => isLoggedIn.value && session.value?.role === 'admin')

  return {
    provide: {
      auth: {
        isLoggedIn,
        isAdmin,
        session,
        updateSession,
      },
    },
  }
})
