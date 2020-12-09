import { createStore, combineReducers } from 'redux';
import { cartReducer } from '../src/cart.reducer';
import { languageReducer } from '../src/language.reducer';

const appReducers = combineReducers({
    product:cartReducer,
    language:languageReducer,
})
    
const store = createStore(appReducers);

export default store;