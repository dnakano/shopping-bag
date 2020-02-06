import React from 'react';

// Show spinner while loading via React.lazy()
function Spinner() {
  return (
    <div className="Spinner" role="presentation">
      <div
        className="Spinner-msg-panel"
        role="presentation"
      >
        <p className="Spinner-msg">Loading...</p>
      </div>
    </div>
  );
}

export default Spinner;
