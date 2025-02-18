// src/components/NavigationButton.js
import React from 'react';
import PropTypes from 'prop-types';

const NavigationButton = ({ onClick, children }) => (
  <button onClick={onClick} className="navigation-button">
    {children}
  </button>
);

NavigationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationButton;