import React, { useEffect } from "react";
import Gallery from "../../components/SingleProduct/Gallery";
import ProductInfo from "../../components/SingleProduct/ProductInfo";
import SimilarProducts from "../../components/SingleProduct/SimilarProducts";
import CategoriesList from "../../components/ProductCategories/CategoriesList/CategoriesList";
import BestGear from "../../components/BestGear/BestGear";
import styles from "./SingleProduct.module.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startGetProducts } from "../../redux/actions/products";

const SingleProduct = () => {
    let { slug } = useParams();
    const dispatch = useDispatch();

    const product = useSelector((state) =>
        state.productsReducer.products.find((item) => item.slug === slug)
    );

    useEffect(() => {
        if (!product) dispatch(startGetProducts("/data.json"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (product)
        return (
            <div className="wrapper">
                <ProductInfo product={product} />
                <section className={`row ${styles.sectionStyle}`}>
                    <Gallery images={product.gallery} />
                </section>
                <div className={`row ${styles.sectionStyle}`}>
                    <SimilarProducts similarProducts={product.others} />
                </div>
                <CategoriesList />
                <div>
                    <BestGear />
                </div>
            </div>
        );
    else return <div>Something went wrong!</div>;
};

export default SingleProduct;
