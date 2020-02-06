import React from 'react';
import PropTypes from 'prop-types';

// Error boundary component
class ErrorBoundary extends React.Component {

  // This lifecycle is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }
  
  render() {
    if (this.state.hasError) {
      // Error found. Display error UI

      return (
        <div className="ErrorBoundary">
          <h4>ERROR: FAILED TO RENDER APP!</h4>
          <p>
            Encountered an error while rendering this app.
          </p>
          <details open>
            <summary>Error Details</summary>
            <p className="ErrorBoundary-description">
              {
                this.state.error && this.state.error.toString()
              }
            </p>
          </details>
        </div>
      );
    }

    // Normally, just render children
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

ErrorBoundary.defaultProps = {
  children: null,
};

export default ErrorBoundary;
