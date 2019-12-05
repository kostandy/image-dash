import React from 'react';
import PropTypes from 'prop-types';

import removeIconPath from '../../assets/remove-icon.svg';

import './index.scss';

const IconButton = ({ name, onClick }) => (
  <button type="button" onClick={onClick} className="icon-button">
    <img src={name === 'remove' ? removeIconPath : ''} alt={name} width={30} height={30} />
  </button>
);

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
