import axios from 'axios';

const apiService = axios.create({
	baseURL: 'http://localhost:3333',
	headers: {
		token: localStorage.getItem('token')
	}
});

export default apiService;

export interface ResponseAPI {
	ok?: boolean;
	code?: number;
	message?: string;
	data?: any;
}
