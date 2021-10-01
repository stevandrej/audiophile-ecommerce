export function useCalculateTotal (cart) {
	const initialValue = 0;
        return cart.reduce(
            (prev, curr) => prev + curr.price * curr.quantity,
            initialValue
        );
}