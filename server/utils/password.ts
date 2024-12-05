import { hash, verify } from "@node-rs/argon2";

export async function hashPassword(plainPassword: string) {
  return await hash(plainPassword, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
}

export async function verifyPassword(hash: string, plainPassword: string) {
  return await verify(hash, plainPassword);
}
