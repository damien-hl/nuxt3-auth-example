import { ROLES } from '~~/constants'

export const useAdmin = () => {
  const authUser = useAuthUser()

  return computed(() => {
    if (!authUser.value)
      return false
    return authUser.value.role === ROLES.ADMIN
  })
}
