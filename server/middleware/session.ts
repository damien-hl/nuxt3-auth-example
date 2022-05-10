import { deserialize } from "~~/server/utils/session";
import { getUserById } from "~~/server/models/user";

export default defineEventHandler(async (event) => {
    let user;

    const cookie = useCookies(event)['__session'];

    if (cookie) {
        const session = deserialize(cookie);

        user = await getUserById(session.userId);
    }

    event.context.user = user
})