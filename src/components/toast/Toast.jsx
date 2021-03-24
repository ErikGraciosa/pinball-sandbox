import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toast.css';

function Toast({ colorStatus, message }) {
  
  const toastColor = colorStatus ? styles.green : styles.white;

  return (
    <div className={styles.Toast}>
      <p className={styles.slideInFromLeft}>Toast Message:</p>
      <p className={toastColor}>{message}</p>
    </div>
  );
}

Toast.propTypes = {
  colorStatus: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

export default Toast;
