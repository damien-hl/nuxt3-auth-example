import { getUserByEmail } from "~~/server/models/user";
import { verify } from "~~/server/utils/password";
import { sign, serialize } from "~~/server/utils/session";

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
        });
    }

    const userWithPassword = await getUserByEmail(email);

    if (!userWithPassword) {
        return createError({
            statusCode: 401,
            message: "Identifiants incorrects",
        });
    }

    const verified = await verify(password, userWithPassword.password);

    if (!verified) {
        return createError({
            statusCode: 401,
            message: "Identifiants incorrects",
        });
    }

    const config = useRuntimeConfig();

    const session = serialize({ userId: userWithPassword.id });
    const signedSession = sign(session, config.secret);

    setCookie(event, '__session', signedSession, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        expires: rememberMe ? new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) : new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    const { password: _password, ...userWithoutPassword } = userWithPassword

    return {
        user: userWithoutPassword
    };
})