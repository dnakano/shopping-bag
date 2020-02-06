// Reducer for myItems state
import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_MYQTY,
} from '../actions/actionTypes';
import { isValidNumber } from 'Utils/utils';

// Add/Update item to shopping bag
const addMyItem = (state, action) => {
  const { sku, name, price, qty, img } = action.payload.item;

  // Check if item already exists
  const index = state.findIndex((el) => el.sku === sku);

  return (
    (index === -1) ? (
      [
        ...state,
        {
          sku,
          name,
          price,
          qty,
          img,
        },
      ]
    ) : (
      state.map((item) => (((item.sku === sku) ? {
        ...item,
        qty: parseInt(isValidNumber(item.qty) ? item.qty : 0, 10) + parseInt(qty, 10),
      } : item)))
    )
  );
};

// Delete an item from a bag
const deleteMyItem = (state, action) => (
  state.filter((item) => item.sku !== action.payload.sku)
);

// Update item's qty
const updateMyQtyInput = (state, action) => {
  const { sku, qty } = action.payload;

  return (
    state.map((item) => ((item.sku === sku) ? { ...item, qty } : item))
  );
};

// Handle myItems state
export default (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return addMyItem(state, action);
    case DELETE_ITEM:
      return deleteMyItem(state, action);
    case UPDATE_MYQTY:
      return updateMyQtyInput(state, action);
    default:
      return state;
  }
};
