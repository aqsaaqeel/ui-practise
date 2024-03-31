import React from 'react';
import './SuccessBox.css';

export const SuccessBox = ({ successMessage }) => {
  return (
    <div className="success-box">
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

