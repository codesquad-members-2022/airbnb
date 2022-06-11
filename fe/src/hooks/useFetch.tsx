import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetFetch = (queryString: string) => {
  const [fetchedData, setFetchedData] = useState<[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>();

  const URL = `${process.env.REACT_APP_SERVER_URL}${queryString}`;

  useEffect(() => {
    setLoading(true);
    const getDatas = async () => {
      try {
        const response = await axios.get(URL);
        setFetchedData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    getDatas();
  }, [URL]);

  return { fetchedData, loading, error };
};

type ControlDataType = {
  [key: string]: number | string;
};

async function usePostFetch(URL: string, updatedData: ControlDataType | undefined) {
  await axios.post(URL, updatedData);
}
