import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import Header from '../shared/Header';

import './index.css';
import GridView from '../GridView';

// TODO: We are creating Admin Tool that allows users to manage images. One of the key features
// provided by this tool, is the ability to add images with tooltips. The tooltips on the images
// are highlight customizable. Users should be able to customize the tooltips colour, text and
// position relative to the image. The complete admin view should include the follow:

// 1) see list of all images in a gridview
// 2) an add new image with tooltip view, linked off the gridview
// 2) when click on an image in the gridview, an image details view should appear that contains
// the one image + tooltip on hover;
// 3) an update selected image + tooltip text + tooltip position, linked from image details view
// 5) a remove image feature

const App = () => (
  <Provider store={store}>
    <Header />
    <GridView />
  </Provider>
);

export default App;
