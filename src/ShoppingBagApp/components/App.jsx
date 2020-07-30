import React from 'react';
import ErrorChecker from 'Components/ErrorChecker';
import Spinner from 'Components/Spinner';
import ShoppingBagContainer from './ShoppingBagContainer';
import ProductList from './ProductList';

// Dynamically load Popup component and name it 'Popup' for webpackChunkName. For more info: https://webpack.js.org/guides/code-splitting/#dynamic-imports
const Popup = React.lazy(() => import(/* webpackChunkName: 'Popup' */ 'Components/redux/Popup'));

function App() {
  return (
    <div className="apps-wrapper">
      <ErrorChecker>
        <>
          <ShoppingBagContainer />
          <ProductList />
          <React.Suspense fallback={<Spinner />}>
            <Popup>
              Item added to the bag
            </Popup>
          </React.Suspense>
        </>
      </ErrorChecker>
    </div>
  );
}

export default App;
