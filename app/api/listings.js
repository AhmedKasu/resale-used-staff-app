import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const addListing = (values, onUploadProgress) => {
  const formData = new FormData();

  formData.append('title', values.title);
  formData.append('price', values.price);
  formData.append('categoryId', values.category.id);
  formData.append('description', values.description);
  values.images.forEach((image) => {
    formData.append('images', {
      name: image.name,
      type: image.type,
      uri: image.uri,
    });
  });

  return client.post(endpoint, formData, {
    onUploadProgress: ({ loaded, total }) => onUploadProgress(loaded / total),
  });
};

export default { getListings, addListing };
