// src/components/ApodImage.js
import React from 'react';
import PropTypes from 'prop-types';

const ApodImage = ({ url, title }) => <img src={url} alt={title} style={{ maxWidth: '100%' }} />;

ApodImage.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ApodImage;