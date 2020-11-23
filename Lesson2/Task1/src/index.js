import { createStore } from 'redux';

export const incrementAction = {
    type:'INCREMENT',
};

const decrementAction = {
    type:'DECREMENT',
};

export const counterReducer = (state = 0, action)=> {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    };
}

export const store = createStore(counterReducer);

console.log(store)