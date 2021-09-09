import React from "react";
import Button from "../Buttons/Button";
import mark2Image from "../../assets/images/category-headphones/desktop/image-xx99-mark-two.jpg";
import styles from "./CategoryProduct.module.scss";

const CategoryProduct = () => {
    return (
        <div className={styles["product-container"]}>
            <div className={styles["product-image"]}>
                <img src={mark2Image} alt="mark 2" />
            </div>
            <div className={styles["product-info"]}>
                <span className={`${styles.badge} overline`}>NEW PRODUCT</span>
                <h2 className={styles.title}>XX99 MARK II HEADPHONES</h2>
                <p>
                    The new XX99 Mark II headphones is the pinnacle of pristine
                    audio. It redefines your premium headphone experience by
                    reproducing the balanced depth and precision of
                    studio-quality sound.
                </p>
                <div className={styles.button}>
                    <Button>SEE PRODUCT</Button>
                </div>
            </div>
        </div>
    );
};

export default CategoryProduct;
