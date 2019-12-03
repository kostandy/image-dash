import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './App';

import './index.css';

const UNSPLASH_ACCESS_TOKEN = '2899a451fa9ea1ae1f8f39a41e0abea2df9518b35a79422013294bc0b4cbcfa6';
axios.defaults.headers.Authorization = `Client-ID ${UNSPLASH_ACCESS_TOKEN}`;

ReactDOM.render(<App />, document.getElementById('root'));
