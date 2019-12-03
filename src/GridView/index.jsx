import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '../shared/Grid';

const GridView = () => { // TODO: 1) see list of all images in a gridview
  const initState = {
    isLoading: false,
  };
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState(initState);

  useEffect(() => {
    // TODO: Fetch images with axios
    axios.get('https://unsplash.com/photos/random');
    return () => {};
  }, []);

  return (
    <main>

      <h2>Image grid</h2>

      { state.isLoading ? 'Loading...' : <Grid /> }

    </main>
  );
};

export default GridView;
