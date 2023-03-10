import client from './client';

const baseURL = '/auth';

const getToken = (credintials) => client.post(baseURL, credintials);

export default { getToken };
