import * as actionTypes from "../actions/actionTypes";

const initState = {
    loading: false,
    categories: [],
    error: null,
};

const categoriesReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,
            };
        case actionTypes.GET_CATEGORIES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default categoriesReducer;
