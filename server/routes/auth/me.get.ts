export default defineEventHandler(async (event) => {
  const userWithPassword = event.context.user;
  if (!userWithPassword) {
    return {
      user: null,
    };
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return {
    user: userWithoutPassword,
  };
});
