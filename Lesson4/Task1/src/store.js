import { createStore } from 'redux';
import { counterReducer } from '../src/counter.reducer';

const store = createStore(counterReducer);

export default store;