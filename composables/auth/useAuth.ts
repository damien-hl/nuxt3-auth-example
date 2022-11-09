import { capitalize } from 'nuxt/dist/app/compat/capi';
import { useAuthUser } from './useAuthUser';

export const useAuth = () => {
  const authUser = useAuthUser();

  const setUser = (user: any) => {
    authUser.value = user;
  };

  const setCookie = (cookie: any) => {
    cookie.value = cookie;
  };

  const login = async (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    const data = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email,
        password,
        rememberMe,
      },
    });

    setUser(data.user);

    return authUser;
  };

  const register = async (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    const data = await $fetch('/api/auth/register', {
      method: 'POST',
      body: { data: { email, password, rememberMe } },
    });

    setUser(data.user);
    return authUser;
  };

  const logout = async () => {
    const data = await $fetch('/api/auth/logout', {
      method: 'POST',
    });

    setUser(data.user);
  };

  const me = async () => {
    if (!authUser.value) {
      try {
        const data = await $fetch('/api/auth/me', {
          headers: useRequestHeaders(['cookie']) as HeadersInit,
        });

        setUser(data.user);
      } catch (error) {
        setCookie(null);
      }
    }

    return authUser;
  };

  return {
    login,
    logout,
    me,
    register,
  };
};
