export { ADD_PRODUCT, REMOVE_PRODUCT } from '../src/cart.actions';

const initialState = {
    productList:[]
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT: {
            return {
                ...state,
                productList:state.productList.concat(action.payload.product),
            }
        }
        case REMOVE_PRODUCT:{
            return {
                ...state,
                productList:state.productList.filter(product => product.id !== payload.id)
            }
        }
        default:
            return state;
    }
}