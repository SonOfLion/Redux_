import { ADD_USER, DELETE_USER } from '../src/users.actions';

const initialState = {
    usersList: []
}

export const usersReducer = (state = initialState, action) => {//previousState , action => nextState
    switch(action.type){
        case ADD_USER:
            return{
                ...state,
                usersList:state.usersList.concat(action.user),
            }
        case DELETE_USER:
            return{
                ...state,
                usersList: state.usersList.filter(user => user.id != action.id),
            }
        default:
            return state;
    }
}