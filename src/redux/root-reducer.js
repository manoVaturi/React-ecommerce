import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducers from './user/user.reducer';
import cartReducers from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'directory'],
};

const rootReducer = combineReducers({
  user: userReducers,
  cart: cartReducers,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
