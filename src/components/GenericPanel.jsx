import React from 'react';
import PropTypes from 'prop-types';
import { createMarkup } from 'Utils/utils';

// Create generic panel
function GenericPanel({ heading, onResetClick, children }) {
  function handleClick(evt) {
    evt.stopPropagation();
  }

  return (
    <div
      className="GenericPanel"
      onClick={onResetClick}
      role="presentation"
    >
      <div
        className="GenericPanel-msg-panel" onClick={handleClick}
        role="presentation"
      >
        <h4
          dangerouslySetInnerHTML={createMarkup(heading)}
        />

        <button
          type="button"
          title="Close"
          className="GenericPanel-btn-close"
          onClick={onResetClick}
        >
          <span>Close</span>
        </button>

        {children}

      </div>
    </div>
  );
}

GenericPanel.propTypes = {
  heading: PropTypes.string.isRequired,
  onResetClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default GenericPanel;
