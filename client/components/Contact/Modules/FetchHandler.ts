import axios from 'axios';

const apiBaseUrl = 'http://localhost:3000/api';

interface ICommonProps {
  endPoint: string;
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
    const response = await axios.get(`${apiBaseUrl}/${endPoint}`, paramsData);
    if (response.status >= 200 && response.status < 300) return { data: response.data, isError: false };
  } catch (error) {
    console.error('Error get fetching data:', error);
    return { data: null, isError: true };
  }
};

export const postApiData = async (props: IPostProps) => {
  const { endPoint, bodyData } = props;
  try {
    const response = await axios.post(`${apiBaseUrl}/${endPoint}`, bodyData);
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
