import { createStore } from 'redux';
import { usersReducer } from '../src/users.reducer';

const store = createStore(usersReducer);

export default store;