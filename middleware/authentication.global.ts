const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default defineNuxtRouteMiddleware(async (to) => {
    if (process.server) { // Only call on initial render ?
        const user = useState('user', () => null);

        try {
            await delay(500);

            user.value = await $fetch('/api/auth/me', {
                headers: useRequestHeaders(['cookie'])
            });

            await delay(500);
        } catch (error) {
            console.log(error);
        }
    }
}) 