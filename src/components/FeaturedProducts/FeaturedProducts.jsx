import React from "react";
import zx9Image from "../../assets/images/home/desktop/image-speaker-zx9.png";
import zx7Image from "../../assets/images/home/desktop/image-speaker-zx7.jpg";
import yx1Image from "../../assets/images/home/desktop/image-earphones-yx1.jpg";
import LinkButton from "../Buttons/LinkButton";
import styles from "./FeaturedProducts.module.scss";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
    const featuredProducts = useSelector(
        (state) => state.productsReducer.products
    );

    if (featuredProducts.length > 0)
        return (
            <>
                <div className={styles["featured-big"]}>
                    <div className={styles["featured-big__image"]}>
                        <img src={zx9Image} alt={featuredProducts[5].name} />
                        <div className={styles.circles}></div>
                    </div>
                    <div className={styles["featured-big__content"]}>
                        <h1 className={styles["featured-big__title"]}>
                            ZX9
                            <br />
                            SPEAKER
                        </h1>
                        <p className={styles["featured-big__description"]}>
                            Upgrade to premium speakers that are phenomenally
                            built to deliver truly remarkable sound.
                        </p>
                        <div className={styles.btn}>
                            <LinkButton
                                variant="secondary"
                                href={`/product/${featuredProducts[5].slug}`}
                            >
                                SEE PRODUCT
                            </LinkButton>
                        </div>
                    </div>
                </div>

                <div
                    className={styles["featured-secondary"]}
                    style={{
                        backgroundImage: `url(${zx7Image})`,
                    }}
                >
                    <h4>ZX7 SPEAKER</h4>
                    <div className={styles.btn}>
                        <LinkButton
                            variant="secondary"
                            href={`/product/${featuredProducts[4].slug}`}
                        >
                            SEE PRODUCT
                        </LinkButton>
                    </div>
                </div>

                <div className={styles["featured-tertiary"]}>
                    <div className={styles["featured-tertiary__img"]}>
                        <img src={yx1Image} alt="yx1 earphones" />
                    </div>
                    <div className={styles["featured-tertiary__content"]}>
                        <h4 className={styles["featured-tertiary__title"]}>
                            YX1 EARPHONES
                        </h4>
                        <div className={styles.btn}>
                            <LinkButton
                                variant="secondary"
                                href={`/product/${featuredProducts[0].slug}`}
                            >
                                SEE PRODUCT
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </>
        );
    else return <div>No data...</div>;
};

export default FeaturedProducts;
