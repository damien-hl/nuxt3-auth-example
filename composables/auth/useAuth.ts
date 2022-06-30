
import { useAuthUser } from "./useAuthUser";

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
    try {
      const data = await $fetch("/api/auth/login", {
        method: "POST",
        body: {
          email,
          password,
          rememberMe,
        },
      });

      setUser(data.user);
    } catch (error) {
      throw error;
    }

    return authUser;
  };

  const logout = async () => {
    try {
        const data = await $fetch('/api/auth/logout', {
            method: 'POST',
        });

        setUser(data.user);
    } catch (error) {
        throw error;
    }
  } 

  const me = async () => {
    if (!authUser.value) {
      try {
        const data = await $fetch("/api/auth/me", {
          headers: useRequestHeaders(["cookie"]),
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
  };
};
