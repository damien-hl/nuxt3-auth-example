import { findAllUsers, isAdmin } from "../../lib/user";

export default defineEventHandler(async (event) => {
  if (!isAdmin(event.context.user)) {
    throw createError({
      statusCode: 401,
      message: "You don't have the rights to access this resource",
    });
  }

  const usersWithPassword = await findAllUsers();

  const usersWithoutPassword = usersWithPassword.map(({ password, ...user }) => user);

  return usersWithoutPassword;
});
