export const useAuth = () => {
    const user = useState('user', () => null);

    const isConnected = computed(() => user.value !== null);

    const isGuest = computed(() => user.value === null);

    const isAdmin = computed(() => user.value && user.value.roles.includes('ADMIN'));

    async function init() {
        const data = await $fetch('/api/auth/me', {
            headers: useRequestHeaders(['cookie'])
        });

        user.value = data.user;
    }

    async function login(email: string, password: string, rememberMe: boolean) {
        const data = await $fetch('/api/auth/login', {
            method: 'POST',
            body: {
                email,
                password,
                rememberMe
            }
        });

        user.value = data.user;
    }

    async function logout() {
        const data = await $fetch('/api/auth/logout', {
            method: 'POST',
        });

        user.value = data.user;
    }

    return {
        user,
        isConnected,
        isGuest,
        isAdmin,
        init,
        login,
        logout
    }
}