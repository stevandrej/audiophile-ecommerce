import React from "react";
import Button from "../Buttons/Button";
import styles from './CheckoutSummary.module.scss';

const CheckoutSummary = () => {
    return (
        <div className={styles.summaryForm}>
            <h6>SUMMARY</h6>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>

			<div className={`row ${styles.rowPayInfo}`}>
				<div className={styles.info}>TOTAL</div>
				<div>$ 5,396</div>
			</div>
			<div className={`row ${styles.rowPayInfo}`}>
				<div className={styles.info}>SHIPPING</div>
				<div>$ 50</div>
			</div>
			<div className={`row ${styles.rowPayInfo}`}>
				<div className={styles.info}>VAT (INCLUDED)</div>
				<div>$ 1,079</div>
			</div>
			<div className={`row ${styles.rowPayInfo}`}>
				<div className={styles.info}>GRAND TOTAL</div>
				<div className={styles.totalPrice}>$ 5,446</div>
			</div>

			<div className='row'>
				<Button>CONTINUE &amp; PAY</Button>
			</div>
        </div>
    );
};

export default CheckoutSummary;
