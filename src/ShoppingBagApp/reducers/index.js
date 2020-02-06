// Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe the fact that something happened, but don't describe how the application's state changes.

import { combineReducers } from 'redux';
import myItems from './myItems';
import showPopup from 'Components/redux/reducers/showPopup';

export default combineReducers({
  myItems,
  showPopup,
});
