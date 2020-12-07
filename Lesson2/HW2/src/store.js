import { createStore } from 'redux';
import { userReducer } from '../src/users.reducer';

const store = createStore(userReducer);

export default store;