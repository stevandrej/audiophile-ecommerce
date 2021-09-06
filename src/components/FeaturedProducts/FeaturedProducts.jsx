import React from "react";
import zx9Image from "../../assets/images/home/desktop/image-speaker-zx9.png";
import zx7Image from "../../assets/images/home/desktop/image-speaker-zx7.jpg";
import yx1Image from "../../assets/images/home/desktop/image-earphones-yx1.jpg";
import Button from "../Buttons/Button";
import styles from "./FeaturedProducts.module.scss";

const FeaturedProducts = () => {
    return (
        <>
            <div className={styles["featured-big"]}>
                <div className={styles["featured-big__image"]}>
                    <img src={zx9Image} alt="zs9 Speaker" />
                    <div className={styles.circles}></div>
                </div>
                <div className={styles["featured-big__content"]}>
                    <h1 className={styles["featured-big__title"]}>
                        ZX9
                        <br />
                        SPEAKER
                    </h1>
                    <p className={styles["featured-big__description"]}>
                        Upgrade to premium speakers that are phenomenally built
                        to deliver truly remarkable sound.
                    </p>
                    <div className={styles.btn}>
                        <Button variant="secondary">SEE PRODUCT</Button>
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
                    <Button variant="secondary">SEE PRODUCT</Button>
                </div>
            </div>

            <div className={styles['featured-tertiary']}>
                <div className={styles['featured-tertiary__img']}><img src={yx1Image} alt="yx1 earphones" /></div>
                <div className={styles['featured-tertiary__content']}>
                    <h4 className={styles['featured-tertiary__title']}>YX1 EARPHONES</h4>
                    <div className={styles.btn}><Button variant='secondary'>SEE PRODUCT</Button></div>
                </div>
            </div>
        </>
    );
};

export default FeaturedProducts;
