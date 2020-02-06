import Spinner from 'Components/Spinner';
import PropTypes from 'prop-types';
import React from 'react';
import ShoppingBagHeader from './ShoppingBagHeader';

// Dynamically load ShoppingBagContent component and name it 'ShoppingBagContent' for webpackChunkName. For more info: https://webpack.js.org/guides/code-splitting/#dynamic-imports
const ShoppingBagContent = React.lazy(() => import(/* webpackChunkName: 'ShoppingBagContent' */ './ShoppingBagContent'));

class ShoppingBag extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { showBag: false };
  }

  // Change qty input
  handleChange = (sku, qty) => (this.props.updateMyQty(sku, qty))

  // Show / Hide shopping bag
  handleClick = () => {
    this.setState((prevState) => ({
      showBag: !prevState.showBag,
    }));
  }

  // Delete item
  handleDeleteClick = (sku) => (this.props.deleteItem(sku))

  // Reset state
  handleResetClick = () => {
    this.setState({
      showBag: false,
    });
  }

  render() {
    const { myItems } = this.props;
    const hasItems = myItems.length;

    return (
      <React.Fragment>
        <ShoppingBagHeader hasItems={hasItems} onClick={this.handleClick} />

        {
          this.state.showBag && (
            <React.Suspense fallback={<Spinner />}>
              <ShoppingBagContent
                myItems={myItems}
                onChange={this.handleChange}
                onClick={this.handleDeleteClick}
                onResetClick={this.handleResetClick}
              />
            </React.Suspense>
          )
        }
      </React.Fragment>
    );
  }
}

ShoppingBag.propTypes = {
  myItems: PropTypes.arrayOf(PropTypes.shape({
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.node.isRequired,
    qty: PropTypes.node.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateMyQty: PropTypes.func.isRequired,
};

export default ShoppingBag;
