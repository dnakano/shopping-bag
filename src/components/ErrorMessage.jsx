import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from 'Utils/utils';

// Display error message
function ErrorMessage({ message }) {
  return (
    <span
      className="ErrorMessage"
      dangerouslySetInnerHTML={createMarkup(message)}
    />
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
