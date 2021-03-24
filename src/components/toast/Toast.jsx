import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toast.css';

function Toast({ colorStatus, message }) {
  
  const toastColor = colorStatus ? styles.green : styles.white;

  return (
    <div className={styles.Toast}>
      <p className={toastColor}>This is a success toast message</p>
      <p className={toastColor}>{message}</p>
    </div>
  );
}

Toast.propTypes = {
  colorStatus: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

export default Toast;
