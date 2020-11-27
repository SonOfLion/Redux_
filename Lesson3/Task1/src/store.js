import { createStore, combineReducers } from 'redux';
import { counterReducer } from '../src/counter.reducer';
import { usersReducer } from '../src/users.reducer';

const appReducers = combineReducers({
    counter:counterReducer,
    users:usersReducer
});

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;