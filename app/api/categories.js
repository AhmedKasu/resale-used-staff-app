import api from './client';

const endpoint = '/categories';

const getCategories = () => api.get(endpoint);

export default { getCategories };
