import React from "react";
import InputText from "../Input/InputText/InputText";
import styles from './CheckoutForm.module.scss';

const CheckoutForm = () => {
    return (
        <div className={styles.form}>
            <h3 className={styles.formName}>CHECKOUT</h3>
            <section>
                <div className={`sub-title ${styles.sectionName}`}>BILLING DETAILS</div>
                <div className="row">
                    <div className="col-6">
                        <InputText
                            name="name"
                            label="Name"
                            required
                            placeholder="Alexei Ward"
                            id="name"
                        />
                    </div>
                    <div className="col-6">
                        <InputText
                            name="email"
                            label="Email Address"
                            required
                            placeholder="alexei@mail.com"
                            id="email"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <InputText
                            name="phone"
                            label="Phone Number"
                            required
                            placeholder="+1202-555-0136"
                            id="phone"
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className={`sub-title ${styles.sectionName}`}>SHIPPING INFO</div>
                <div className="row">
                    <InputText
                        name="address"
                        id="adress"
                        required
                        label="Address"
                        placeholder="1137 Williams Avenue"
                    />
                </div>
                <div className="row">
                    <div className="col-6">
                        <InputText
                            name="zip"
                            id="zip"
                            required
                            label="ZIP Code"
                            placeholder="10001"
                        />
                    </div>
                    <div className="col-6">
                        <InputText
                            name="city"
                            id="city"
                            required
                            label="City"
                            placeholder="New York"
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className={`sub-title ${styles.sectionName}`}>PAYMENT DETAILS</div>
                <div className="row">
                    <div className="col-6">Payment Method</div>
                    <div className="col-6 dir-col">
                        <InputText
                            name="city"
                            id="city"
                            required
                            label="City"
                            placeholder="New York"
                        />
                        <InputText
                            name="city"
                            id="city"
                            required
                            label="City"
                            placeholder="New York"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <InputText
                            name="emoneyNum"
                            id="emoneyNum"
                            required
                            label="E-Money Number"
                            placeholder="238521993"
                        />
                    </div>
                    <div className="col-6">
                        <InputText
                            name="emoneyPin"
                            id="emoneyPin"
                            required
                            label="e-Money PIN"
                            placeholder="6891"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CheckoutForm;
