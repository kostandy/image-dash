import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Grid = ({ isLoading, images }) => (
  <div className="grid">
    {!isLoading && images && images.map((image) => (
      <figure className="grid__figure" key={image.id}>
        <img src={image.urls.small} alt={image.description} className="grid__image" loading="lazy" />
      </figure>
    ))}
  </div>
);

Grid.propTypes = {
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Grid;
