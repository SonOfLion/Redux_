import { SET_USER, REMOVE_USER } from '../src/user.actions';

const initialState = {
    list:[]
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER:{
            return {
                ...state,
                ...action.payload.userData,
            };
        };
        
        case REMOVE_USER:{
            return null;
        }

        default:
            return state;
    }
}