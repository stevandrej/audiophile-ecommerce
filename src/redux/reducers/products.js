import * as actionTypes from "../actions/actionTypes";

const initState = {
    loading: false,
    products: [],
    error: null,
};

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case actionTypes.GET_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default productsReducer;
