import { findUserByEmail } from "../../lib/user";
import { serialize, sign } from "../../lib/cookie";
import { verifyPassword } from "../../lib/password";

export default defineEventHandler(async (event) => {
  const body = await readBody<{ email: string; password: string; rememberMe: boolean }>(event);

  const { email, password, rememberMe } = body;
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: "Email address and password are required",
    });
  }

  const userWithPassword = await findUserByEmail(email);
  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      message: "Bad credentials",
    });
  }

  const verified = await verifyPassword(userWithPassword.password, password);
  if (!verified) {
    throw createError({
      statusCode: 401,
      message: "Bad credentials",
    });
  }

  const config = useRuntimeConfig();

  const session = serialize({ userId: userWithPassword.id });
  const signedSession = sign(session, config.cookieSecret);

  setCookie(event, config.cookieName, signedSession, {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    expires: rememberMe
      ? new Date(Date.now() + parseInt(config.cookieRememberMeExpires))
      : new Date(Date.now() + parseInt(config.cookieExpires)),
  });

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return {
    user: userWithoutPassword,
  };
});
