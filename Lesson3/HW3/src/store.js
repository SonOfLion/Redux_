import { createStore, combineReducers } from 'redux';
import { cartReducer } from '../src/cart.reducer';
import { languageReducer } from '../src/language.reducer';
import { userReducer } from '../src/user.reducer';

const appReducers = combineReducers({
    product:cartReducer,
    language:languageReducer,
    user:userReducer,
})
    
const store = createStore(appReducers);

export default store;