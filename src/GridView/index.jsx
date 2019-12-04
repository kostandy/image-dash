import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Grid from '../shared/Grid';
import fetchImageList from './actions';

import './index.scss';

const GridView = ({ fetchImages, images, isLoading }) => {
  useEffect(() => {
    const params = {
      per_page: 15,
    };
    fetchImages(params);
    return () => {};
  }, []);

  return (
    <main className="main">
      <Grid isLoading={isLoading} images={images} />
    </main>
  );
};

GridView.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ gridView }) => ({
  images: gridView.images,
  isLoading: gridView.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchImages: (params) => dispatch(fetchImageList(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GridView);
