import * as actionTypes from './actionTypes';

const getProductsStart = () => {
	return {
		type: actionTypes.GET_PRODUCTS_START
	}
}

const getProductsSuccess = (products) => {
	return {
		type: actionTypes.GET_PRODUCTS_SUCCESS,
		payload: products
	}
}

const getProductsFailed = (error) => {
	return {
		type: actionTypes.GET_PRODUCTS_FAILED,
		error: error
	}
}

export const startGetProducts = (url) => {
	return async (dispatch) => {
		dispatch(getProductsStart());

		fetch(url)
			.then(response => response.json())
			.then(data => {
				dispatch(getProductsSuccess(data));
			})
			.catch(error => {
				dispatch(getProductsFailed(`Failed to load products: ${error.message}`));
			});
	}
}