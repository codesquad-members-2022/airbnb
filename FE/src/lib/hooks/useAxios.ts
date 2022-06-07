import { useEffect, useState } from 'react';

import axios, { AxiosRequestConfig } from 'axios';

import { BASE_URL } from '@constants';

export interface AxiosTypes {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  config?: AxiosRequestConfig;
}

const instance = axios.create({
  baseURL: BASE_URL,
});

const useAxios = <T>({
  method,
  url,
  config,
}: AxiosTypes): [
  {
    response: T | undefined;
    error: string;
    isLoading: boolean;
  },
  () => void,
] => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const request = () => {
    setIsLoading(true);

    instance[method](url, config)
      .then((res) => setResponse(res.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => request(), []);

  return [{ response, error, isLoading }, request];
};

export default useAxios;
