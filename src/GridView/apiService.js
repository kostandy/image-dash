import axios from 'axios';

const timeout = 300;

// https://unsplash.com/documentation#list-photos
export const fetchImagesService = (params) => axios.get('/photos', { params });

// Emulate to removing of image by id
// eslint-disable-next-line no-unused-vars,max-len
export const removeImageService = (id) => new Promise((resolve) => setTimeout(() => resolve(), timeout));

export default {
  fetchImagesService,
  removeImageService,
};
