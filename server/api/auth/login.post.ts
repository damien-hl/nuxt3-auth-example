import { getUserByEmail } from "~~/server/models/user";
import { serialize } from "~~/server/utils/session";


export default defineEventHandler(async (event) => {
    const body = await useBody<{ email: string, password: string }>(event);

    const {
        email,
        password,
    } = body;

    if (!email || !password) {
        return createError({
            statusCode: 400,
        })
    }

    const user = await getUserByEmail(email)

    if (!user || user.password !== password) {
        return createError({
            statusCode: 401,
        })
    }

    const session = serialize({ userId: user.id })

    setCookie(event, '__session', session, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });

    return user
})