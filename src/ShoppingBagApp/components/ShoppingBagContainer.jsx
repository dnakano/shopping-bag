// ShoppingBagContainer component connects ShoppingBag component with Redux
import { connect } from 'react-redux';
import { deleteItem, updateMyQty } from '../actions';
import ShoppingBag from './ShoppingBag';

// Map state to props to pass to ShoppingBag component
const mapState = (state) => ({
  myItems: state.myItems,
});

const mapDispatch = {
  deleteItem,
  updateMyQty,
};

export default connect(
  mapState,
  mapDispatch
)(ShoppingBag);
