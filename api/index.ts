import axios from 'axios';

// 로컬 개발 시 같은 Next.js 앱의 API 사용 (server/ 제거 후 pages/api/* 라우트 사용)
const getApiSsrUrl = () => {
  if (typeof window !== 'undefined' && window.location.origin.includes('localhost')) {
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
