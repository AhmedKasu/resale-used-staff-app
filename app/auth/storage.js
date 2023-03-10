import * as SecureStore from 'expo-secure-store';
import jwt_decode from 'jwt-decode';

const key = 'AuthToken';

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('error getting auth token', error);
  }
};

const getUser = async () => {
  try {
    const token = await getToken();
    return token ? jwt_decode(token) : null;
  } catch (error) {
    console.log('error getting user', error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('error removing auth token', error);
  }
};

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (error) {
    console.log('error storring auth token', error);
  }
};

export default { getUser, removeToken, storeToken };
