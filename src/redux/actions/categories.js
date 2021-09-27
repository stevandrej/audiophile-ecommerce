import * as actionTypes from "./actionTypes";

const getCategoriesStart = () => {
    return {
        type: actionTypes.GET_CATEGORIES_START,
    };
};

const getCategoriesSuccess = (categories) => {
    return {
        type: actionTypes.GET_CATEGORIES_SUCCESS,
        payload: categories,
    };
};

const getCategoriesFailed = (error) => {
    return {
        type: actionTypes.GET_CATEGORIES_FAILED,
        error: error,
    };
};

export const startGetCategories = (url) => {
    return async (dispatch) => {
        dispatch(getCategoriesStart());
        
		await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                dispatch(getCategoriesSuccess(data));
            })
            .catch((error) => {
                dispatch(
                    getCategoriesFailed(`Failed to load categories: ${error}`)
                );
            });
    };
};
