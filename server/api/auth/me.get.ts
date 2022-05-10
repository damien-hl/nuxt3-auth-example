import { getSession } from "~~/server/utils/session";

export default defineEventHandler(async (event) => {
    const userWithPassword = await getSession(event); 

    if (!userWithPassword) {
        return null
    }

    const { password: _password, ...userWithoutPassword } = userWithPassword

    return userWithoutPassword;
})