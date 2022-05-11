export default defineNuxtRouteMiddleware(async (to, from) => {
    const { user } = useAuth()

    if (user.value) {
        // Same route === Initial load
        if (from.name === to.name) {
            return navigateTo({name: 'private'})
        }
        
        return abortNavigation()
    }
}) 