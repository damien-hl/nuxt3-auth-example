import { deserialize, unsign } from "~~/server/utils/session";
import { getUserById } from "~~/server/models/user";

export default defineEventHandler(async (event) => {
    const cookie = useCookies(event)['__session'];

    if (!cookie) { return }

    const config = useRuntimeConfig();

    const unsignedSession = unsign(cookie, config.secret);

    if (!unsignedSession) { return }

    const session = deserialize(unsignedSession);

    const user = await getUserById(session.userId);

    event.context.user = user;
})