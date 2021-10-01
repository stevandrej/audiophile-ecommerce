import React from "react";
import Button from "../Buttons/Button";
import styles from "./CheckoutSummary.module.scss";
import { useCalculateTotal } from "../../hooks/useCalculateTotal";

const CheckoutSummary = ({ cart, ...props }) => {
	const totalPrice = useCalculateTotal(cart);

    return (
        <div className={styles.summaryForm}>
            <h6 className={styles.summaryHeading}>SUMMARY</h6>
            {cart && cart.length > 0 ? (
                <ul>
                    {cart.map((item, index) => (
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
                                x {item.quantity}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className={styles.item}>Your shopping cart is empty.</div>
            )}
            <div className={`row ${styles.rowPayInfo}`}>
                <div className={styles.info}>TOTAL</div>
                <div>$ {totalPrice}</div>
            </div>
            <div className={`row ${styles.rowPayInfo}`}>
                <div className={styles.info}>SHIPPING</div>
                <div>Free Shipping</div>
            </div>
            <div className={`row ${styles.rowPayInfo}`}>
                <div className={styles.info}>GRAND TOTAL</div>
                <div className={styles.totalPrice}>$ {totalPrice}</div>
            </div>

            <div className={`row ${styles.payBtn}`}>
                <Button>CONTINUE &amp; PAY</Button>
            </div>
        </div>
    );
};

export default CheckoutSummary;
