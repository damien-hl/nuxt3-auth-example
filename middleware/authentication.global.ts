export default defineNuxtRouteMiddleware(async (to) => {
    if (process.server) { // Only call on initial render ?
        const user = useState('user', () => null);

        try {
            user.value = await $fetch('/api/auth/me', {
                headers: useRequestHeaders(['cookie'])
            });
        } catch (error) {
            console.log(error);
        }
    }
}) 