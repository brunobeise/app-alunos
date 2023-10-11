
import apiService, { ResponseAPI } from './api.service';

interface LoginRequest {
	username: string;
	password: string;
}

// LOGIN
export async function login(objLogin: LoginRequest): Promise<ResponseAPI> {
	try {
		const resposta = await apiService.post('/auth/login', objLogin);

		return {
			ok: resposta.data?.ok,
			message: resposta.data?.message,
			code: resposta.data?.code,
			data: resposta.data?.data,
		};
	} catch (error: any) {
		return {
			ok: error.response.data?.ok,
			message: error.response.data?.message,
			code: error.response.data?.code,
			data: error.response.data?.data,
		};
	}
}

// LOGOUT
// TO-DO - criar service para logout de acordo com a API
export async function logout() {
	try {
		//
	} catch (error) {
		//
	}
}

// CADASTRO DO USER
export async function signup(objSignup: LoginRequest): Promise<ResponseAPI> {
	try {


		const resposta = await apiService.post('/users', objSignup);
		console.log(resposta);

		return {
			ok: resposta.data?.ok,
			message: resposta.data?.message,
			code: resposta.data?.code,
			data: resposta.data?.data,
		};
	} catch (error: any) {
		return {
			ok: error.response.data?.ok,
			message: error.response.data?.message,
			code: error.response.data?.code,
			data: error.response.data?.data,
		};
	}
}

// TO-DO - criar service para cadastro de acordo com a API


