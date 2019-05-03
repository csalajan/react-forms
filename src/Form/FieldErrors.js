import React from 'react';
import PropTypes from 'prop-types';

import styles from './Form.css';

const FieldErrors = ({ errors }) => {
  if (errors) {
    return (
      <div className={styles["form-field-errors"]}>
        {errors.map(e => <div key={e.validator}>{e.validator}</div>)}
      </div>
    );
  }

  return null;
};

FieldErrors.propTypes = {
  errors: PropTypes.array,
};

export default FieldErrors;
