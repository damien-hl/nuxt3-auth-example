import bcrypt from "bcryptjs";

export async function hash(plainPassword: string) {
    return bcrypt.hash(plainPassword, 10);
}

export function verify(plainPassword: string, hash: string) {
    return bcrypt.compare(plainPassword, hash);
}
