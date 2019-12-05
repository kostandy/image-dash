import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Grid from '../shared/Grid';
import {
  fetchImagesAction,
  removeImageAction,
} from './actions';

import './index.scss';

const GridView = ({
  fetchImages, images, isLoading, removeImage,
}) => {
  useEffect(() => {
    const params = {
      per_page: 15,
    };
    fetchImages(params);
    return () => {};
  }, []);

  return (
    <main className="main">
      <Grid isLoading={isLoading} images={images} removeImage={removeImage} />
    </main>
  );
};

GridView.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  removeImage: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ gridView }) => ({
  images: gridView.images,
  isLoading: gridView.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchImages: (params) => dispatch(fetchImagesAction(params)),
  removeImage: (id) => dispatch(removeImageAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GridView);
