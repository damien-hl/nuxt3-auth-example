import { getUsers } from "~~/server/models/user";

export default defineEventHandler(async (event) => {
    const userWithPassword = event.context.user; 

    if (!userWithPassword || !userWithPassword.roles.includes('ADMIN')) {
        return createError({
            statusCode: 401,
            message: "Vous n'avez pas les droits nécessaires pour accéder à cette ressource",
        })
    }

    const usersWithPassword = await getUsers();

    const usersWithoutPassword = usersWithPassword.map(({password: _password, ...user}) => user);
    
    return usersWithoutPassword;
})