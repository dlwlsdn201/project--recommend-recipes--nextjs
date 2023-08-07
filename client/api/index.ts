import axios from 'axios';

const BASE_URL = process.env.BASE_URL;
const CLIENT_URL = process.env.CLIENT_URL;
const BASE_TIMEOUT = Number(process.env.BASE_TIMEOUT);

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
