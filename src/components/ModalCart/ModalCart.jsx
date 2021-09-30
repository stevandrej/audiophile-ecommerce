import React from "react";
import * as styles from "./ModalCart.module.scss";
import { useSelector } from "react-redux";
import LinkButton from "../Buttons/LinkButton";
import InputNumber from "../Input/InputNumber/InputNumber";
import { removeAllFromCart, updateQuanity } from "../../redux/actions/cart";
import { useDispatch } from "react-redux";

const ModalCart = () => {
    const cart = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch();

    const calculateTotal = () => {
        const initialValue = 0;
        return cart.reduce(
            (prev, curr) => prev + curr.price * curr.quantity,
            initialValue
        );
    };

    const handleQuantityChange = (id, newQuantity) => {
        dispatch(updateQuanity(id, newQuantity));
    };

    return (
        <div className={styles.modalContainer}>
            <div className={styles.cartInfo}>
                <h6>CART ({cart.length})</h6>
                <button
                    className={styles.btnRemoveAll}
                    onClick={() => dispatch(removeAllFromCart())}
                >
                    Remove all
                </button>
            </div>
            <ul className={styles.cartItems}>
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <li className={styles.item} key={`${item.id}-${index}`}>
                            <div className={styles.itemLeftSide}>
                                <img
                                    className={styles.itemImage}
                                    src={`${window.location.origin}/${item.image}`}
                                    alt={item.name}
                                />
                                <div className={styles.itemInfo}>
                                    <div>{item.name}</div>
                                    <div>$ {item.price}</div>
                                </div>
                            </div>
                            <div className={styles.itemQuantity}>
                                <InputNumber
                                    value={item.quantity}
                                    onChange={(newQuantity)=>{
                                        handleQuantityChange(item.id, newQuantity)
                                    }}
                                >
                                    {item.quantity}
                                </InputNumber>
                            </div>
                        </li>
                    ))
                ) : (
                    <div>Your cart is empty.</div>
                )}
            </ul>
            <div className={styles.totalInfo}>
                <h6>TOTAL</h6>
                <h6>$ {calculateTotal()}</h6>
            </div>
            <div className={styles.btnCheckout}>
                <LinkButton href="/checkout">CHECKOUT</LinkButton>
            </div>
        </div>
    );
};

export default ModalCart;
