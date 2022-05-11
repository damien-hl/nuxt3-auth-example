export const useAuth = () => {
    const user = useState('user', () => null)

    const isConnected = computed(() => user.value !== null)

    const isGuest = computed(() => user.value === null)

    const isAdmin = computed(() => user.value && user.value.roles.includes('ADMIN'))

    async function init() {
        user.value = await $fetch('/api/auth/me', {
            headers: useRequestHeaders(['cookie'])
        });
    }

    async function login(email: string, password: string) {
        user.value = await $fetch('/api/auth/login', {
            method: 'POST',
            body: {
                email,
                password
            }
        })
    }

    async function logout() {
        user.value = await $fetch('/api/auth/logout', {
            method: 'POST',
        })
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