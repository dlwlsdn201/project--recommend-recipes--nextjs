import { POST_MAIL } from '@/api';
import axios from 'axios';

const API_SSR_URL = process.env.API_SSR_URL;

interface ICommonProps {
  endPoint?: string;
}

interface IGetProps extends ICommonProps {
  paramsData: {
    [key: string]: any;
  };
}

interface IPostProps extends ICommonProps {
  bodyData: {
    [key: string]: any;
  };
}

export const getApiData = async (props: IGetProps) => {
  const { endPoint, paramsData } = props;
  try {
    const response = await axios.get(`${API_SSR_URL}${endPoint}`, paramsData);
    if (response.status >= 200 && response.status < 300) return { data: response.data, isError: false };
  } catch (error) {
    console.error('Error get fetching data:', error);
    return { data: null, isError: true };
  }
};

export const postApiData = async (props: IPostProps) => {
  const { bodyData } = props;
  try {
    const response = await POST_MAIL(bodyData);
    if (response.status >= 200 && response.status < 300) return { data: response.data, isError: false };
  } catch (error) {
    console.error('Error post api data:', error);
    return { data: null, isError: true };
  }
};

// API 성공 시, state 업데이트
export const handleApiSucceed = ({ setIsFetched, setLoading }) => {
  setLoading(false);
  setIsFetched(true);
};
// API 실패 시, state 업데이트
export const handleApiFailed = ({ setIsFetched, setIsError, setLoading }) => {
  setIsError(true);
  setLoading(false);
  setIsFetched(true);
};
