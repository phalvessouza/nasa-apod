import React from 'react';
import PropTypes from 'prop-types';

const ApodVideo = ({ url, title }) => {
  return (
    <div className="ApodVideo">
      <iframe
        width="560"
        height="315"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  );
};

ApodVideo.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ApodVideo;