import React, { useState } from "react";
import styles from "./ProductInfo.module.scss";
import Button from "../Buttons/Button";
import InputNumber from "../Input/InputNumber/InputNumber";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart";

const ProductInfo = ({ newProduct = true, ...props }) => {
    let history = useHistory();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const handleBtnClick = (item) => {
        dispatch(addToCart(item));
    };

    if (props.product != null)
        return (
            <section className={styles.product}>
                <button
                    className={styles.btnBack}
                    onClick={() => history.goBack()}
                >
                    Go Back
                </button>
                <div className={styles["product-container"]}>
                    <div className={styles["product-image"]}>
                        {props.product.image.desktop !== undefined ? (
                            <img
                                src={
                                    window.location.origin +
                                    "/" +
                                    props.product.image.desktop
                                }
                                alt={props.product.name}
                            />
                        ) : (
                            "Preview unavailable"
                        )}
                    </div>
                    <div className={styles["product-info"]}>
                        {props.product.new && (
                            <span className={`${styles.badge} overline`}>
                                NEW PRODUCT
                            </span>
                        )}
                        <h2 className={styles.title}>{props.product.name}</h2>
                        <p>{props.product.description}</p>
                        <div className={styles.price}>
                            $ {props.product.price}
                        </div>
                        <div className={styles.button}>
                            <div className={styles.inputContainer}>
                                <InputNumber
                                    value={quantity}
                                    onChange={(newValue) =>
                                        setQuantity(newValue)
                                    }
                                />
                            </div>
                            <Button
                                click={() =>
                                    handleBtnClick({
                                        id: props.product.id,
                                        slug: props.product.slug,
                                        name: props.product.name,
                                        price: props.product.price,
                                        quantity: quantity,
                                        image: props.product.image.mobile,
                                    })
                                }
                            >
                                ADD TO CART
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-6 ${styles.features}`}>
                        <h3 className={styles.title}>FEATURES</h3>
                        <p>{props.product.features}</p>
                    </div>
                    <div className={`col-6 ${styles.inTheBox}`}>
                        <h3 className={styles.title}>IN THE BOX</h3>
                        <ul>
                            {props.product.includes.map((item, index) => (
                                <li key={`${index}-${item.item}`}>
                                    <span
                                        className={`sub-title ${styles.boxList}`}
                                    >
                                        {item.quantity}x
                                    </span>{" "}
                                    {item.item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        );
    else return "Something went wrong!";
};

export default ProductInfo;
