import React from "react";
import zx9Image from ".././../assets/images/home/desktop/image-speaker-zx9.png";
import Button from "../Buttons/Button";
import styles from './FeaturedProducts.module.scss';

const FeaturedProducts = () => {
    return (
        <div>
            <div>
                <img src={zx9Image} alt="zs9 Speaker" />
            </div>
            <div>
                <h1>
                    ZX9
                    <br />
                    SPEAKER
                </h1>
                <p>
                    Upgrade to premium speakers that are phenomenally built to
                    deliver truly remarkable sound.
                </p>
                <div>
                    <Button variant="secondary">SEE PRODUCT</Button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
