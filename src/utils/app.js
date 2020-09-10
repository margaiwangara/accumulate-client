import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const loading = () => (
  <div style={loaderStyle}>
    <FontAwesomeIcon icon="spinner" spin size="2x" />
  </div>
);

const loaderStyle = {
  width: '100%',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default loading;
