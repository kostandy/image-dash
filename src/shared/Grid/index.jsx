/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';
import Modal from '../Modal';

import './index.scss';

const Grid = ({ isLoading, images, removeImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid">
        { isLoading && 'Loading...' }
        {!isLoading && images && images.map((image) => (
          <figure
            className="grid__figure figure"
            key={image.id}
          >
            <a
              href="#modal"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.urls.small}
                alt={image.description || ''}
                title={image.description}
                className="grid__image"
                loading="lazy"
              />
            </a>
            <Tooltip title={image.description} onRemoveClick={() => removeImage(image.id)} />
          </figure>
        ))}
        { images && !images.length && !isLoading && 'No images ;)'}
      </div>
      {selectedImage && <Modal selectedImage={selectedImage} />}
    </>
  );
};

Grid.propTypes = {
  images: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  removeImage: PropTypes.func.isRequired,
};

export default Grid;
