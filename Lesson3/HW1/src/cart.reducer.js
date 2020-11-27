import { ADD_PRODUCT, REMOVE_PRODUCT } from '../src/cart.actions';

const initialState = {
    listOfProducts: [],
}

export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT: {
            return {
                ...state,
                listOfProducts:state.listOfProducts.concat(action.payload.productData),
            };
        };
        case REMOVE_PRODUCT:{
            const newList = state.listOfProducts.filter(product => product.id !== action.payload.id);

            return {
                ...state,
                listOfProducts:newList,
            };
        };
        default:
            return state;
    };
};