import React from 'react';
import PropTypes from 'prop-types';
import GenericPanel from 'Components/GenericPanel';
import ShoppingBagItems from './ShoppingBagItems';
import { formatPrice, isValidNumber } from 'Utils/utils';
import { calculateItemTotal } from '../utils/utils';

// Display shopping bag message
function EmptyShoppingBag() {
  return (
    <div className="EmptyShoppingBag">
      <p>Your bag is empty.</p>
      <button type="button">Start Shopping</button>
    </div>
  );
}

// Calculate subtotal
const calculateSubtotal = (list) => {
  let subtotal = 0;

  // Calculate each item's cost and add subtotal
  list.forEach((item) => {
    const itemTotal = calculateItemTotal(item.price, item.qty);

    subtotal += itemTotal;
  });

  return subtotal;
};

// Calculate taxes
const calculateTaxes = () => 0;

// Calculate total items
const calculateTotalItems = (list) => {
  let qty = 0;

  // Calculate each item's cost and add subtotal
  list.forEach((item) => {
    const itemQty = isValidNumber(item.qty) ? parseInt(item.qty, 10) : 0;

    qty += parseInt(itemQty, 10);
  });

  return qty;
};

// Display detail totals
function TotalsPanel({ list }) {
  const subtotal = calculateSubtotal(list);
  const taxes = calculateTaxes();
  const total = subtotal + taxes;

  return (
    <ul className="TotalsPanel-list">
      <li>
        <b>Subtotal</b>
        <span>{formatPrice(subtotal)}</span>
      </li>
      <li>
        <b>Estimated Tax</b>
        <span><a href="#">Calculate</a></span>
      </li>
      <li className="TotalsPanel-total">
        <b>Total ({calculateTotalItems(list)} items)</b>
        <span>{formatPrice(total)}</span>
      </li>
    </ul>
  );
}

TotalsPanel.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.node.isRequired,
    qty: PropTypes.node.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

// Check out button
function CheckOutButton() {
  return (
    <div className="checkOut">
      <button type="button">Checkout</button>
    </div>
  );
}

function ShoppingBagContent({ myItems, onChange, onClick, onResetClick }) {
  return (
    <GenericPanel
      heading="Your Shopping Bag"
      onResetClick={onResetClick}
    >
      <div className="ShoppingBagContent">
        {
          myItems.length === 0 ? (
            <EmptyShoppingBag />
          ) : (
            <React.Fragment>
              <ShoppingBagItems
                list={myItems}
                onChange={onChange}
                onClick={onClick}
              />
              <TotalsPanel list={myItems} />
              <CheckOutButton />
            </React.Fragment>
          )
        }
      </div>
    </GenericPanel>
  );
}

ShoppingBagContent.propTypes = {
  myItems: PropTypes.arrayOf(PropTypes.shape({
    sku: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.node.isRequired,
    qty: PropTypes.node.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
};

export default ShoppingBagContent;
