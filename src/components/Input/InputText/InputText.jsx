import React from "react";
import styles from "./InputText.module.scss";

const InputText = ({
    id,
    name = "",
    label = "",
    defaultValue = "",
    placeholder = "",
    required = false,
}) => {
    return (
        <div className={styles["input-text"]}>
            <label htmlFor={id}>
                {label}
            </label>
            <input
                type="text"
                id={id}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

export default InputText;
