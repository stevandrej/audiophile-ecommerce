import React from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "../../components/Checkout/CheckoutForm";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary";
import styles from './Checkout.module.scss';

const Checkout = () => {

    const cart = useSelector(state => state.cartReducer.cart);

    return (
		<div className={styles.componentBackground}>
        <div className={`wrapper ${styles.contentWrapper}`}>
            <div className="row">
                <div className={styles.form}>
                    <CheckoutForm />
                </div>
                <div className={styles.summary}>
                    <CheckoutSummary cart={cart}/>
                </div>
            </div>
        </div>
		</div>
    );
};

export default Checkout;
