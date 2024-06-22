import React from 'react';
import styles from './Error.modules.css'; // Assuming you have a CSS module file Error.module.css
const ErrorModel = ({ message ="somthing wrong"}) => {
  return (
    <div className={styles.error}>
      <span className={styles.errorMessage}>{message}</span>
    </div>
  );
};

export default ErrorModel;