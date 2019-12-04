import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import Loader from '../Loader';

const Modal = ({ selectedImage: image }) => {
  const [isImageLoading, setImageLoading] = useState(true);

  useEffect(() => () => {
    setImageLoading(true);
  }, [image]);

  return (
    <div className="overlay" id="modal">
      <a className="cancel" href="#_" aria-label="Close modal" />
      <div className="modal">
        { isImageLoading && (
        <div className="modal__loader">
          <Loader />
        </div>
        ) }
        <img
          className="modal__image"
          src={image.urls.full}
          width={image.width}
          height={image.height}
          alt={image.description || ''}
          onLoad={() => setImageLoading(false)}
          loading="lazy"
          hidden={isImageLoading}
        />
        <div className="content">
          <a className="close" href="#_">╳</a>
          <p>{image.description || 'No description'}</p>
          <p>
            <b>Author:</b>
            &nbsp;
            <u>{image.user.name}</u>
          </p>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  selectedImage: PropTypes.instanceOf(Object).isRequired,
};

export default Modal;
