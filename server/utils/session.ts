import type { H3Event } from "h3";
import { getUserById } from "~~/server/models/user";

export async function getUserFromSession(event: H3Event) {
  const config = useRuntimeConfig(event);

  const cookie = getCookie(event, config.cookieName);
  if (!cookie) return null;

  const unsignedSession = unsign(cookie, config.cookieSecret);
  if (!unsignedSession) return null;

  const session = deserialize(unsignedSession);

  return getUserById(session.userId);
}
