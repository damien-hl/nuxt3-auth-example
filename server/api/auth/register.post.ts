import { getUserByEmail } from '~~/server/database/repositories/userRepository';
import { signJwt } from '~~/server/utils/jwt';
import { hashPasswoard } from '~~/server/utils/password';
import { createUser } from '~~/server/database/repositories/userRepository';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { email, password, rememberMe } = body.data;

  if (!email || !password) {
    return createError({
      statusCode: 400,
      message: 'Email address and password are required',
    });
  }

  const emailExists = await getUserByEmail(email);

  if (emailExists !== null) {
    return createError({
      statusCode: 401,
      statusMessage: 'Email is already registered',
    });
  }

  const encryptedPassword: string = await hashPasswoard(password);

  const userData = {
    email: email,
    password: encryptedPassword,
  };

  const user = await createUser(userData);

  const config = useRuntimeConfig();

  const token = signJwt({ userId: user.id }, config.jwtSecret);

  setCookie(event, config.cookieName, token, {
    httpOnly: true, // If you don't need the cookie to be accessible from browser
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    expires: rememberMe
      ? new Date(Date.now() + config.cookieRememberMeExpires)
      : new Date(Date.now() + config.cookieExpires),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...userWithoutPassword } = user;

  return {
    user: userWithoutPassword,
  };
});
