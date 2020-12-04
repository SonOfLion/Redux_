import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "../src/users/users.reducer";

const reducer = combineReducers({
    users: usersReducer,
});

const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.info("dispatcing", action);
    let result = next(action);
    console.log("next state", store.getState());
    console.groupEnd(result);
    return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(logger)
);

const store = createStore(reducer, enhancer);

export default store;