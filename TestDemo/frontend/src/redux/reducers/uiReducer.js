import UIACTIONS from "../actions/uiReducerAction"

const initialState = {
    isDrawerOpen : false,
    isLoggedIn : true
}


const uiReducer = (state  = initialState, action) => {

    if(action.type === UIACTIONS.LOGOUT)
    {
        return { ...state , isLoggedIn : false}
    }
    else{
        return state
    }
}

export default uiReducer