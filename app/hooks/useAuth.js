import { useContext, useState } from 'react';
import AuthContext from '../auth/context';

import authApi from '../api/auth';
import jwt_decode from 'jwt-decode';
import storage from '../auth/storage';
import usersApi from '../api/users';

const useAuth = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  const register = async (credentials) => {
    try {
      setLoading(true);
      const results = await usersApi.registerUser(credentials);
      setLoading(false);

      if (results.status === 201) {
        const { email, password } = results.data;
        login({ email, password });
      }
      setError(results.data.error);
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (credentials) => {
    try {
      setLoading(true);
      const results = await authApi.getToken(credentials);
      setLoading(false);

      if (results.status === 200) {
        storage.storeToken(results.data);
        setUser(jwt_decode(results.data));
      } else setError(results.data.error);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    setUser(null);
    storage.removeToken();
  };

  return { error, register, loading, login, logOut, user };
};

export default useAuth;
