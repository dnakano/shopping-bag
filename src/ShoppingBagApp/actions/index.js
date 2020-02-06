// Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_MYQTY,
} from './actionTypes';

// Action creators
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: {
    item,
  },
});

export const deleteItem = (sku) => ({
  type: DELETE_ITEM,
  payload: {
    sku,
  },
});

export const updateMyQty = (sku, qty) => ({
  type: UPDATE_MYQTY,
  payload: {
    sku,
    qty,
  },
});
