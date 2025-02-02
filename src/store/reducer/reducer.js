import actionTypes from '../actionTypes/actionTypes';

export const initialState = {
    user: null
};

const reducer = (state= initialState, action) => {
    console.log(action)

    switch(action.type){
        case actionTypes.SET_USER : 
            return {
                ...state,
                user: action.user
            }
        default: 
            return  state;
    }
}


export default reducer;