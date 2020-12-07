import { ADD_PRODUCT, REMOVE_PRODUCT } from '../src/cart.actions';

const initialState = {
    list:[]
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT:{
            return{
                ...state,
                list:state.list.concat(action.payload.product)
            }
        }
        case REMOVE_PRODUCT:{
            return{
                ...state,
                list:state.list.filter(product => product.id !== product.id)
            }
        }
        default:
            return state;
    }
}