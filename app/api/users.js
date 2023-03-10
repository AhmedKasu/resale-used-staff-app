import client from './client';

const baseURL = '/users';

const registerUser = (credentials) => client.post(baseURL, credentials);

export default { registerUser };
