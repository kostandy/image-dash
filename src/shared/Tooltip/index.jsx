import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton';

import './index.scss';

const Tooltip = ({ placement, onRemoveClick }) => (
  <div className={`tooltip ${placement === 'top' ? 'tooltip--top' : ''}`}>
    Tooltip
    {onRemoveClick && (<IconButton onClick={onRemoveClick} name="remove" />)}
  </div>
);

Tooltip.propTypes = {
  placement: PropTypes.string,
  onRemoveClick: PropTypes.func,
};

Tooltip.defaultProps = {
  placement: '',
  onRemoveClick: null,
};

export default Tooltip;
