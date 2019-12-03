import axios from 'axios';

const getImages = (params) => axios.get('https://unsplash.com/photos/random', params);

export default getImages;
