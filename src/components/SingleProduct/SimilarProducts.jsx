import React from "react";
import Button from "../Buttons/Button";
import styles from "./SimilarProducts.module.scss";
import { useHistory } from "react-router-dom";

const SimilarProducts = ({ similarProducts }) => {
    let history = useHistory();

    const handleProductClick = (link) => {
        history.push(link);
    };

    return (
        <div className={styles.similarProductsContainer}>
            <h3 className={styles.heading}>You may also like</h3>
            <div className={styles.productsList}>
                {similarProducts.map((product) => (
                    <div className={styles.product} key={product.slug}>
                        <img
                            className={styles.productImage}
                            src={
                                window.location.origin +
                                "/" +
                                product.image.desktop
                            }
                            alt={product.name}
                        />
                        <h5 className={styles.productTitle}>{product.name}</h5>
                        <div className={styles.button}>
                            <Button
                                click={() =>
                                    handleProductClick(
                                        `/product/${product.slug}`
                                    )
                                }
                            >
                                SEE PRODUCT
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarProducts;
