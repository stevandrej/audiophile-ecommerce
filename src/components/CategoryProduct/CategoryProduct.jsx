import React from "react";
import { useHistory } from "react-router";
import Button from "../Buttons/Button";
import styles from "./CategoryProduct.module.scss";

const CategoryProduct = ({
    newProduct = false,
    reverseDirection = false,
    ...props
}) => {
    let history = useHistory();

    const handleBtnClick = () => {
        history.push(`/product/${props.product.slug}`);
    };

    return (
        <div
            className={`${styles["product-container"]} ${
                reverseDirection && styles["reverse-direction"]
            }`}
        >
            <div className={styles["product-image"]}>
                <img
                    src={
                        window.location.origin +
                        `/` +
                        props.product.image.desktop
                    }
                    alt={props.product.name}
                />
            </div>
            <div className={styles["product-info"]}>
                {props.product.new && (
                    <span className={`${styles.badge} overline`}>
                        NEW PRODUCT
                    </span>
                )}
                <h2 className={styles.title}>{props.product.name}</h2>
                <p>{props.product.description}</p>
                <div className={styles.button}>
                    <Button click={handleBtnClick}>SEE PRODUCT</Button>
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;
