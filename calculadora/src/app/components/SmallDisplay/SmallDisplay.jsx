'use client';
import React from 'react';
import PropTypes from 'prop-types'
const SmallDisplay = ({text}) => {
  return (
    <p style={{color: '#A2A0A0', fontSize: '20px'}}>{text}</p>
  );
}

SmallDisplay.propTypes = {
  text: PropTypes.string,
}
export default SmallDisplay