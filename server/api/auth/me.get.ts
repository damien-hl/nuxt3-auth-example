import { getUserById } from "~~/server/models/user";

export default defineEventHandler(async (event) => {
    const cookie = useCookies(event)['__session'];

    if (!cookie) {
        return createError({
            statusCode: 401,
        })
    }
    
    const session = JSON.parse(Buffer.from(cookie, 'base64').toString('utf-8'));

    const user = await getUserById(session.userId);

    if (!user) {
        return createError({
            statusCode: 401,
        })
    }

    return user
})