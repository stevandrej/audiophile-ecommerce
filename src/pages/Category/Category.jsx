import React, { useEffect } from "react";
import CategoriesList from "../../components/ProductCategories/CategoriesList/CategoriesList";
import "./Category.scss";
import BestGear from "../../components/BestGear/BestGear";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/products";

const Category = () => {
    const { categoryName } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.startGetProducts("/data.json"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const products = useSelector((state) =>
        state.productsReducer.products.filter(
            (item) => item.category === categoryName
        )
    );

    return (
        <>
            <div className="category-name">
                <h2>{categoryName}</h2>
            </div>

            <div className="wrapper">
                {products.map((item, index) => (
                    <CategoryProduct
                        product={item}
                        reverseDirection={index % 2 === 0 ? false : true}
                        key={item.id}
                    />
                ))}

                <CategoriesList />
                <BestGear />
            </div>
        </>
    );
};

export default Category;
