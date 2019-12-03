import axios from 'axios';

// https://unsplash.com/documentation#list-photos
const getImages = (params) => axios.get('/photos', { params });

export default getImages;
