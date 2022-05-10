import { getUserById } from "~~/server/models/user";

export default defineEventHandler(async (event) => {
    const userId = useCookies(event)['__session'];

    if (!userId) {
        return createError({
            statusCode: 401,
        })
    }

    const user = await getUserById(userId);

    if (!user) {
        return createError({
            statusCode: 401,
        })
    }

    return user
})