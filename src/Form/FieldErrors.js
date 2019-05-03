import React from 'react';
import PropTypes from 'prop-types';

const FieldErrors = ({ errors }) => {
  if (errors) {
    return (
      <div className='errors'>
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
