// src/components/ApodExplanation.js
import React from 'react';
import PropTypes from 'prop-types';

const ApodExplanation = ({ explanation }) => <p>{explanation}</p>;

ApodExplanation.propTypes = {
  explanation: PropTypes.string.isRequired,
};

export default ApodExplanation;