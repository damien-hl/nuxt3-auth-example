import type { User } from "../lib/user";

export default defineEventHandler(async (event) => {
  const user = await getUserFromSession(event);
  if (user) event.context.user = user;
});

declare module "h3" {
  interface H3EventContext {
    user?: User;
  }
}
