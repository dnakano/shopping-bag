import { isValidNumber } from 'Utils/utils';

// Calculate item's total cost
export const calculateItemTotal = (price, qty) => {
  const tempPrice = (!Number.isNaN(price) && price !== '') ? parseFloat(price) : 0;

  const tempQty = isValidNumber(qty) ? parseInt(qty, 10) : 0;

  return (tempPrice * tempQty);
};
