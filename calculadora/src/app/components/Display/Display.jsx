'use client';
import React from 'react';
import PropTypes from 'prop-types'


const Display = ({ text }) => {
  // Limitar el texto a 9 caracteres
  const limitedText = text ? text.substring(0, 9) : '';

  return (
    <div data-testid="resultado" style={{color: 'white', fontSize: '40px'}}>{limitedText}</div>
  )
}

Display.propTypes = {
  text: PropTypes.string,
}

export default Display;
