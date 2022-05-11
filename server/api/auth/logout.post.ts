export default defineEventHandler(async (event) => {
    deleteCookie(event, '__session', {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });

    return {
        user: null
    };
})