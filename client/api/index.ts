import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';
const CLIENT_URL = 'http://localhost:3000/';
const BASE_TIMEOUT = 60000;

export const CREATE_RECOMMEND_RECIPES = (bodyData: { userInput: string }) =>
  axios({
    method: 'POST',
    baseURL: BASE_URL,
    url: 'chat',
    data: bodyData,
    timeout: BASE_TIMEOUT,
  });

export const CREATE_LOGIN = () =>
  axios({
    method: 'POST',
    baseURL: CLIENT_URL,
    url: 'api/login',
    // data: bodyData,
    timeout: BASE_TIMEOUT,
  });

export const READ_LOGOUT = () =>
  axios({
    method: 'GET',
    baseURL: CLIENT_URL,
    url: 'api/logout',
    // data: bodyData,
    timeout: BASE_TIMEOUT,
  });
