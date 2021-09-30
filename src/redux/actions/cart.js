import * as actionTypes from "./actionTypes";

export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item,
    };
};

export const removeAllFromCart = () => {
    return {
        type: actionTypes.REMOVE_ALL_FROM_CART,
    };
};

export const updateQuanity = (id, newQuantity) => {
    return {
        type: actionTypes.UPDATE_QUANTITY,
        payload: {
            id,
            newQuantity,
        },
    };
};
