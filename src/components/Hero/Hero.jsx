import React from "react";
import LinkButton from "../Buttons/LinkButton";
import styles from "./Hero.module.scss";
import backgroundImage from "../../assets/images/home/desktop/image-hero.jpg";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div
                className={`${styles.hero__bgimage} wrapper`}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className={styles.hero__content}>
                    <h6 className={`${styles.tag_new_product} overline`}>New product</h6>
                    <div className={`${styles.product_content}`}>
                        <h1 className={styles.product_content__title}>XX99 Mark II Headphones</h1>
                        <p className={styles.product_content__text}>
                            Experience natural, lifelike audio and exceptional
                            build quality made for the passionate music
                            enthusiast.
                        </p>
                    </div>
                    <div>
                        <LinkButton href="/product/xx99-mark-two-headphones">SEE PRODUCT</LinkButton>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default Hero;
