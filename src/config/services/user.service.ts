import apiService from "./api.service";

export interface UserDTO {
    id?: string
    username: string
    password?: string
    enable?: boolean
    token: string
    createdAt: string
    updatedAt?: string
}

export async function listUsers() {
    try {
        const resposta = await apiService.get('/users');
        const users = resposta.data.data.map((i: UserDTO) => {
            return {
                username: i.username,
                token: i.token,
                createdAt: i.createdAt,
            };
        });
        return { users };
    } catch (err: any) {
        throw new Error(err.response.data.message)
    }
}

