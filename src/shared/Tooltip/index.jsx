import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Tooltip = ({ placement }) => (
  <div className={`tooltip ${placement === 'top' ? 'tooltip--top' : ''}`}>
    Tooltip
  </div>
);

Tooltip.propTypes = {
  placement: PropTypes.string,
};

Tooltip.defaultProps = {
  placement: '',
};

export default Tooltip;
