import React from 'react';
import '../styles/button.css';
const Button = ({ name }) => {
  return (
    <div>
      <button>{name}</button>
    </div>
  );
};

export default Button;
