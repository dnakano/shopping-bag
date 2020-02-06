import React from 'react';
import PropTypes from 'prop-types';
import {
  REGEX_ALPHA,
  isValidNumber,
  formatPrice,
  removeLeadingZero,
} from 'Utils/utils';

// Create list item
class Product extends React.PureComponent {
  constructor(props) {
    super(props);

    // Ref for qty input field
    this.qtyInput = React.createRef();
  }

  // Keep track of qty input change
  handleChange = () => {
    const qty = this.qtyInput.current.value;

    // Check if qty is valid
    if (isValidNumber(qty)) {
      // Remove leading 0 if exists
      this.qtyInput.current.value = removeLeadingZero(qty);
    } else {
      // Don't allow to input non-integer value
      this.qtyInput.current.value = qty.replace(REGEX_ALPHA, '');
    }
  }

  // Submit selected product
  handleClick = () => {
    const qty = this.qtyInput.current.value;

    this.props.onClick(this.props.product, qty);
  }

  render() {
    const { sku, name, price, img } = this.props.product;
    const formId = `productQtyForm${sku}`;
    const qtyId = `p${sku}`;

    return (
      <li className="generalList-item">
        <div className="itemName">
          <b>{name}</b>
          <span>SKU#: {sku}</span>
        </div>

        <div className="itemPhoto">
          <img src={img} alt={name} />
        </div>

        <div className="itemPriceQty">
          <span>
            Price: {formatPrice(price)}
          </span>

          <form id={formId} className="qtyForm">
            <label htmlFor={qtyId} title="Quantity">Qty:</label>

            <input
              type="text"
              id={qtyId}
              name={qtyId}
              ref={this.qtyInput}
              defaultValue="1"
              onChange={this.handleChange}
              size="3"
              minLength="1"
              maxLength="3"
              aria-labelledby="quantity"
              required
            />
          </form>
        </div>

        <button
          type="submit"
          title="Add to shopping bag"
          className="btn-add"
          onClick={this.handleClick}
        >
          <span>Add to bag</span>
        </button>
      </li>
    );
  }
}

Product.propTypes = {
  product: PropTypes.exact({
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Product;
