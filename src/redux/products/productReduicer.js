import { GET_PRODUCT } from "./actionTypes"

const initialState = {
    product: [],
    loading: false,
    error:""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_COUNTRIES_REQUEST':
            return {
              ...state,
              loading: true
            }
        case GET_PRODUCT : 
        return {
            ...state,
            product: action.payload,
            loading: true,
        }
        default: return state
    }
}

export default reducer;