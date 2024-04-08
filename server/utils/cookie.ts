import { type KeyObject, createHmac, timingSafeEqual } from "node:crypto";

export type CookieSecret = string | Buffer | KeyObject;

export function serialize(obj: object) {
  const value = Buffer.from(JSON.stringify(obj), "utf-8").toString("base64");

  if (Buffer.byteLength(value) > 4096)
    throw createError({
      statusCode: 400,
      statusMessage: "Bad request",
      message: "Cookie too large",
    });

  return value;
}

export function deserialize(value: string) {
  return JSON.parse(Buffer.from(value, "base64").toString("utf-8"));
}

export function sign(value: string, secret: CookieSecret) {
  const signature = createHmac("sha256", secret).update(value).digest("base64").replace(/=+$/, "");

  return `${value}.${signature}`;
}

export function unsign(input: string, secret: CookieSecret) {
  const value = input.slice(0, input.lastIndexOf("."));
  const expectedInput = sign(value, secret);
  const expectedBuffer = Buffer.from(expectedInput);
  const inputBuffer = Buffer.from(input);

  if (!(expectedBuffer.equals(inputBuffer) && timingSafeEqual(expectedBuffer, inputBuffer))) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid cookie signature",
      message: "Invalid cookie signature",
    });
  }

  return value;
}
