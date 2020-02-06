import React from 'react';
import PropTypes from 'prop-types';

// Shopping bag header section
function ShoppingBagHeader({ hasItems, onClick }) {
  const className = `ShoppingBagHeader-bag-icon ${hasItems ? 'ShoppingBagHeader-indicator' : ''}`;

  return (
    <nav className="ShoppingBagHeader">
      <button
        type="button"
        className={className}
        title="Your Shopping Bag"
        onClick={onClick}
      >
        <span>Your Shopping Bag</span>
      </button>
    </nav>
  );
}

ShoppingBagHeader.propTypes = {
  hasItems: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ShoppingBagHeader;
