import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'Components/Spinner';
import ShoppingBagHeader from './ShoppingBagHeader';

// Dynamically load ShoppingBagBody component and name it 'ShoppingBagBody' for webpackChunkName. For more info: https://webpack.js.org/guides/code-splitting/#dynamic-imports
const ShoppingBagBody = React.lazy(() => import(/* webpackChunkName: 'ShoppingBagBody' */ './ShoppingBagBody'));

function ShoppingBag(props) {
  // Use useState to track variable that is used to open/close shopping bag
  const [showBag, setShowBag] = useState(false);

  // Show shopping bag
  function handleClick() {
    setShowBag(true);
  }

  // Reset state
  function handleCloseClick() {
    setShowBag(false);
  }

  return (
    <React.Fragment>
      <ShoppingBagHeader hasItems={props.myItems.length} onClick={handleClick} />

      {
        showBag && (
          <React.Suspense fallback={<Spinner />}>
            <ShoppingBagBody
              {...props}
              onCloseClick={handleCloseClick}
            />
          </React.Suspense>
        )
      }
    </React.Fragment>
  );
}

ShoppingBag.propTypes = {
  myItems: PropTypes.arrayOf(PropTypes.shape({
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.node.isRequired,
    qty: PropTypes.node.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default ShoppingBag;
