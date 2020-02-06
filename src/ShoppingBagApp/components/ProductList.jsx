import { setPopup } from 'Components/redux/actions';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { isValidNumber, sortByKey } from 'Utils/utils';
import { addItem } from '../actions';
import { PRODUCTS } from '../assets/productsData';
import Product from './Product';

class ProductList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.products = sortByKey(PRODUCTS, 'name');
  }

  // Dispatch to add items to shopping bag
  handleClick = ({ sku, name, price, img }, qty) => {
    if (isValidNumber(qty)) {
      this.props.addItem({ sku, name, price, qty, img });
      this.props.setPopup(true);
    }
  }

  render() {
    return (
      <ul className="generalList ProductList">
        {
          this.products.map((product) => (
            <Product
              key={product.sku}
              product={product}
              onClick={this.handleClick}
            />))
        }
      </ul>
    );
  }
}

ProductList.propTypes = {
  addItem: PropTypes.func.isRequired,
  setPopup: PropTypes.func.isRequired,
};

const mapDispatch = {
  addItem,
  setPopup,
};

export default connect(
  null,
  mapDispatch
)(ProductList);
