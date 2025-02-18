// src/components/ApodTitle.js
import React from 'react';
import PropTypes from 'prop-types';

const ApodTitle = ({ title }) => <h1>{title}</h1>;

ApodTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ApodTitle;