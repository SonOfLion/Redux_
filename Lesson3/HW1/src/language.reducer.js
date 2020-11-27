import { SETLANGUAGE } from '../src/language.actions';

const initialState = 'es';

export const languageReducer = (state = initialState, action) => {
    switch(action.type){
        case SETLANGUAGE: 
            return action.payload.language;
    
        default:
            return state;
    }
}