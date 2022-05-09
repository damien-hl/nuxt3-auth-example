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

    if (email !== "admin@gmail.com" && password !== "password") {
        return createError({
            statusCode: 401,
        })
    }

    const user = { email: "admin@gmail.com" }

    setCookie(event, '__session', user.email, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });

    return user
})