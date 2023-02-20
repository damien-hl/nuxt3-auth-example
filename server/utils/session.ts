import type { H3Event, SessionConfig } from 'h3'

const sessionConfig: SessionConfig = useRuntimeConfig().auth || {}

export type AuthSession = {
  id: string
  email: string
  role: string
}

export const useAuthSession = (event: H3Event) => {
  const session = useSession<AuthSession>(event, sessionConfig)

  return session
}
