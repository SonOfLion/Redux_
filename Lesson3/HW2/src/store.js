import { createStore, combineReducers } from 'redux';

import { cartReducer } from '../src/cart.reducer';
import { languageReducer } from '../src/language.reducer';
import { userReducer } from '../src/user.reducer';

const appReducer = combineReducers({
    cart: cartReducer,
    language: languageReducer,
    userData: userReducer,
})

const store = createStore(appReducer);

export default store;