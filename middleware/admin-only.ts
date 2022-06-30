export default defineNuxtRouteMiddleware(async (to, from) => {
    const isAdmin = useAdmin();

    if (!isAdmin) {
        // Same route === Initial load
        if (from.name === to.name) {
            return navigateTo({name: 'index'})
        }
        
        return abortNavigation()
    }
}) 