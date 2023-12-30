export default defineEventHandler(async (event) => {
  const user = await getUserFromSession(event);
  if (user) event.context.user = user;
});
