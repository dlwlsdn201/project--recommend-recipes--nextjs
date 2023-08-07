import axios from 'axios';

const BASE_URL = process.env.BASE_URL;
const API_SSR_URL = process.env.API_SSR_URL;
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
    baseURL: API_SSR_URL,
    url: 'login',
    // data: bodyData,
    timeout: BASE_TIMEOUT,
  });

export const READ_LOGOUT = () =>
  axios({
    method: 'GET',
    baseURL: API_SSR_URL,
    url: 'logout',
    // data: bodyData,
    timeout: BASE_TIMEOUT,
  });

export const POST_MAIL = (bodyData) =>
  axios({
    method: 'POST',
    baseURL: API_SSR_URL,
    url: 'mail',
    data: bodyData,
    timeout: BASE_TIMEOUT,
  });
