import React from "react";
import styles from "./InputNumber.module.scss";

const InputNumber = ({ value = 1, onChange }) => {

    return (
        <input
            type="number"
            className={styles.inputNumber}
            min="1"
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
        />
    );
};

export default InputNumber;
