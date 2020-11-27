import { createStore, combineReducers } from 'redux';

import { productReducer } from '../src/cart.reducer';
import { languageReducer } from '../src/language.reducer';
import { userReducer } from '../src/user.reducer';

const appReducer = combineReducers({
    cart: productReducer,
    language: languageReducer,
    user: userReducer,
})

const store = createStore(appReducer);

export default store;