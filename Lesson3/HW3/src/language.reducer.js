import SET_LANGUAGE from '../src/language.actions';

const initialState = 'eng';

export const languageReducer = (state = initialState, action) =>  {
    switch(action.type){
        case SET_LANGUAGE:
            return initialState.payload.language;
        
        default:
            return state;
    }
}