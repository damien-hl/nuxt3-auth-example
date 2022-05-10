const users = [
    {
        id: '41dbc5f7-9a4e-42e6-832b-1d3dd8c7c4b6',
        email: 'admin@gmail.com',
        password: 'password',
    }
]

export async function getUserByEmail(email: string) {
    return users.find(user => user.email === email)
}

export async function getUserById(id: string) {
    return users.find(user => user.id === id)
}