import { getUserByEmail } from "~~/server/models/user";
import { serialize } from "~~/server/utils/session";


export default defineEventHandler(async (event) => {
    const body = await useBody<{ email: string, password: string, rememberMe: boolean }>(event);

    const {
        email,
        password,
        rememberMe,
    } = body;

    if (!email || !password) {
        return createError({
            statusCode: 400,
            message: "L'adresse email et le mot de passe sont requis",
        })
    }

    const user = await getUserByEmail(email)

    if (!user || user.password !== password) {
        return createError({
            statusCode: 401,
            message: "L'adresse email ou le mot de passe est incorrect",
        })
    }

    const session = serialize({ userId: user.id })

    setCookie(event, '__session', session, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        expires: rememberMe ? new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) : new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    return user
})