import React, { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import CategoriesList from "../../components/ProductCategories/CategoriesList/CategoriesList";
import "./Home.scss";
import * as actions from "../../redux/actions/products";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import BestGear from "../../components/BestGear/BestGear";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.startGetProducts("/data.json"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loading = useSelector((state) => state.productsReducer.loading);

    return (
        <>
            <Hero />
            <div className="wrapper">
                {loading ? (
                    "loading..."
                ) : (
                    <>
                        <CategoriesList />
                        <main>
                            <FeaturedProducts/>
                        </main>
                    </>
                )}
                <BestGear />
            </div>
        </>
    );
};

export default Home;
