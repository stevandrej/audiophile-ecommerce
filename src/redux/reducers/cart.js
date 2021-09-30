import * as actionTypes from "../actions/actionTypes";

const initState = {
    cart: [],
};

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //Find element if already in cart
            const index = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );
            //if exist, change quantity
            if (index !== -1) {
                let updatedCart = [...state.cart];
                updatedCart[index] = {
                    ...updatedCart[index],
                    quantity:
                        updatedCart[index].quantity + action.payload.quantity,
                };
                return {
                    ...state,
                    cart: updatedCart,
                };
            }
            //if doesn't exist, add new element to cart
            else
                return {
                    ...state,
                    cart: [...state.cart, action.payload],
                };

        case actionTypes.REMOVE_ALL_FROM_CART:
            return {
                ...state,
                cart: [],
            };

        case actionTypes.UPDATE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) => {
                    return item.id === action.payload.id
                        ? { ...item, quantity: action.payload.newQuantity }
                        : item;
                }),
            };

        default:
            return state;
    }
};

export default cartReducer;
