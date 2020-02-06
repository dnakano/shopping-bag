import React from 'react';
import PropTypes from 'prop-types';
import {
  REGEX_ALPHA,
  isInteger,
  removeLeadingZero,
  formatPrice,
} from 'Utils/utils';
import { calculateItemTotal } from '../utils/utils';

// Create item total cost section
function ItemCosts({ price, qty }) {
  const itemTotal = calculateItemTotal(price, qty);

  return (
    <div className="itemTotal">
      {formatPrice(itemTotal)}
    </div>
  );
}

ItemCosts.propTypes = {
  price: PropTypes.number.isRequired,
  qty: PropTypes.node.isRequired,
};

class ShoppingBagItem extends React.PureComponent {
  
  handleChange = (evt) => {
    const { value } = evt.target;

    // Remove leading 0 from integer and don't allow non-integers
    const qty = isInteger(value) ?
      removeLeadingZero(value) : value.replace(REGEX_ALPHA, '');

    this.props.onChange(this.props.sku, qty);
  };

  handleClick = () => {
    this.props.onClick(this.props.sku);
  }

  render() {
    const { sku, name, price, qty, img } = this.props;
    const formId = `myItemQtyForm${sku}`;
    const qtyId = `m${sku}`;

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
              value={qty}
              onChange={this.handleChange}
              size="3"
              minLength="1"
              maxLength="3"
              aria-labelledby="quantity"
              required
            />
          </form>
        </div>

        <ItemCosts price={price} qty={qty} />

        <button
          type="button"
          title="Remove from shopping bag"
          className="btn-remove"
          onClick={this.handleClick}
        >
          <span>Remove</span>
        </button>
      </li>
    );
  }
}

ShoppingBagItem.propTypes = {
  sku: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  qty: PropTypes.node.isRequired,
  img: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

function ShoppingBagItems({ list, onChange, onClick }) {
  return (
    <ul className="generalList ShoppingBagItems">
      {
        list.map((item) => (
          <ShoppingBagItem
            key={item.sku}
            {...item}
            onChange={onChange}
            onClick={onClick}
          />))
      }
    </ul>
  );
}

ShoppingBagItems.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.node.isRequired,
    qty: PropTypes.node.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ShoppingBagItems;
