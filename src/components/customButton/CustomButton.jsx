import React from 'react';

// Style
import './customButton.scss';

const CustomButton = ({children, ...otherProps}) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;