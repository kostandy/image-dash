import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import Header from '../shared/Header';

import './index.css';
import GridView from '../GridView';

const App = () => (
  <Provider store={store}>
    <Header />
    <GridView />
  </Provider>
);

export default App;
