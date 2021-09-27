import React from "react";
import CheckoutForm from "../../components/Checkout/CheckoutForm";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary";
import styles from './Checkout.module.scss';

const Checkout = () => {
    return (
		<div className={styles.componentBackground}>
        <div className={`wrapper ${styles.contentWrapper}`}>
            <div className="row">
                <div className={styles.form}>
                    <CheckoutForm />
                </div>
                <div className={styles.summary}>
                    <CheckoutSummary />
                </div>
            </div>
        </div>
		</div>
    );
};

export default Checkout;
