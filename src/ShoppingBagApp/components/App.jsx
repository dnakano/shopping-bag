import React from 'react';
import ErrorBoundary from 'Components/ErrorBoundary';
import Spinner from 'Components/Spinner';
import ShoppingBagContainer from './ShoppingBagContainer';
import ProductList from './ProductList';

// Dynamically load Popup component and name it 'Popup' for webpackChunkName. For more info: https://webpack.js.org/guides/code-splitting/#dynamic-imports
const Popup = React.lazy(() => import(/* webpackChunkName: 'Popup' */ 'Components/redux/Popup'));

function App() {
  return (
    <div className="app-wrapper">
      <React.StrictMode>
        <ErrorBoundary>
          <ShoppingBagContainer />
          <ProductList />
          <React.Suspense fallback={<Spinner />}>
            <Popup>
              Item added to the bag
            </Popup>
          </React.Suspense>
        </ErrorBoundary>
      </React.StrictMode>
    </div>
  );
}

export default App;
