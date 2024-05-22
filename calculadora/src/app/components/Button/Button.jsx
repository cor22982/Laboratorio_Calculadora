'use client';
import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ text, onClick, tipo }) => {

  return (
    <button onClick={onClick} className={tipo}>
      {text} 
    </button> 
  )
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  tipo: PropTypes.string
}

export default Button