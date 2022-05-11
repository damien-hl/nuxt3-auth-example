export default defineNuxtRouteMiddleware(async (to) => {
    if (process.server) { // Only call on initial render ?
        const { init } = useAuth()
        
        try {
            await init();
        } catch (error) {
            console.log(error);
        }
    }
}) 