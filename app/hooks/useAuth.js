import { useContext, useState } from 'react';
import AuthContext from '../auth/context';

import authApi from '../api/auth';
import jwt_decode from 'jwt-decode';
import storage from '../auth/storage';

const useAuth = () => {
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(AuthContext);

  const login = async (credentials) => {
    try {
      const results = await authApi.getToken(credentials);
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

  return { error, login, logOut, user };
};

export default useAuth;
