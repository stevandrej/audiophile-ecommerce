import React from "react";
import styles from './BestGear.module.scss';
import bestGearImage from '../../assets/images/shared/desktop/image-best-gear.jpg';

const BestGear = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles["content__title"]}>
                    Bringing you the<br/><span>best</span> audio gear
                </h3>
                <p>
                    Located at the heart of New York City, Audiophile is the
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </p>
            </div>
			<div className={styles['image-container']}>
				<img src={bestGearImage} alt='best gear' />
			</div>
        </section>
    );
};

export default BestGear;
