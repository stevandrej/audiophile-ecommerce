import React from "react";
import * as styles from "./ModalNotification.module.css";

const ModalNotification = (props) => {
    return <div className={styles.success}>{props.children}</div>;
};

export default ModalNotification;
