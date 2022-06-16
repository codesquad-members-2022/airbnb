import { useSearchParams } from 'react-router-dom';

export const getSearchParams = (targetName: string) => {
  const [searchParams] = useSearchParams();
  return searchParams.get(targetName);
};

export const test = () => {};
