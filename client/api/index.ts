import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';
const BASE_TIMEOUT = 60000;

export const CREATE_RECOMMEND_RECIPES = (bodyData: { userInput: string }) =>
	axios({
		method: 'POST',
		baseURL: BASE_URL,
		url: 'chat',
		data: bodyData,
		timeout: BASE_TIMEOUT
	});
