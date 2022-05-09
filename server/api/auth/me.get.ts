export default defineEventHandler(async (event) => {
    const userEmail = useCookies(event)['__session'];

    if (!userEmail) {
        return createError({
            statusCode: 401,
        })
    }

    const user = { email: "admin@gmail.com" }

    return user
})