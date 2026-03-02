import axios from 'axios';

// 브라우저에서는 항상 현재 출처 사용 (동일 출처 API). SSR 시에만 env 사용.
// 프로덕션(Vercel)에서 localhost로 요청하면 timeout 발생하므로 window.location.origin 필수
const getApiSsrUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_API_SSR_URL || '';
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_SSR_URL = getApiSsrUrl();
const BASE_TIMEOUT = Number(process.env.NEXT_PUBLIC_BASE_TIMEOUT);

export const CREATE_RECOMMEND_RECIPES = (bodyData: { userInput: string }) =>
  axios({
    method: 'POST',
    baseURL: API_BASE_URL,
    url: 'chat',
    data: bodyData,
    timeout: BASE_TIMEOUT,
  });

export const CREATE_LOGIN = () =>
  axios({
    method: 'POST',
    baseURL: API_SSR_URL,
    url: 'api/login',
    // data: bodyData,
    timeout: BASE_TIMEOUT,
    headers: {
      'Access-Control-Allow-Origin': API_SSR_URL,
    },
  });

export const READ_LOGOUT = () =>
  axios({
    method: 'GET',
    baseURL: API_SSR_URL,
    url: 'api/logout',
    // data: bodyData,
    timeout: BASE_TIMEOUT,
    headers: {
      'Access-Control-Allow-Origin': API_SSR_URL,
    },
  });

export const POST_MAIL = (bodyData) =>
  axios({
    method: 'POST',
    baseURL: API_SSR_URL,
    url: 'api/mail',
    data: bodyData,
    timeout: BASE_TIMEOUT,
    headers: {
      'Access-Control-Allow-Origin': API_SSR_URL,
    },
  });
