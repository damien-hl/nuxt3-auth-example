const users = [
    {
        id: '41dbc5f7-9a4e-42e6-832b-1d3dd8c7c4b6',
        email: 'admin@gmail.com',
        password: '$2b$10$3ZqfWmrM2criNLBl/6GJKOAmMzlp2bNJAZCXEgBU5SDSD/38044jK',
        roles: ["ADMIN"]
    },
    {
        id: 'd0065700-1707-4ad9-811b-8bbed0364318',
        email: 'user@gmail.com',
        password: '$2b$10$eEH/niG53tldrseTcMRpEOW4eYh9ApVFS4g9Ykw6zVzRf5krfANi2',
        roles: ["USER"]
    }
];

export async function getUsers() {
    return users;
}

export async function getUserByEmail(email: string) {
    return users.find(user => user.email === email);
}

export async function getUserById(id: string) {
    return users.find(user => user.id === id);
}