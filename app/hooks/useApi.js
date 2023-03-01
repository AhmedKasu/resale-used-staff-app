import { useState } from 'react';

const useApi = (apiFunc) => {
  const [data, setdata] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setdata(response.data);
    setError(false);
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
export default useApi;
