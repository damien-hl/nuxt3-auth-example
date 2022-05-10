import { getUserById } from "~~/server/models/user";
import { deserialize } from "~~/server/utils/session";

export default defineEventHandler(async (event) => {
    const cookie = useCookies(event)['__session'];

    if (!cookie) {
        return createError({
            statusCode: 401,
        })
    }
    
    const session = deserialize(cookie);

    const user = await getUserById(session.userId);

    if (!user) {
        return createError({
            statusCode: 401,
        })
    }

    return user
})