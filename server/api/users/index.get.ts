import {
  getUsers,
  isAdmin,
} from '~~/server/database/repositories/userRepository';

export default defineEventHandler(async (event) => {
  if (!isAdmin(event.context.user)) {
    return createError({
      statusCode: 401,
      message: "You don't have the rights to access this resource",
    });
  }

  return await getUsers();
});
