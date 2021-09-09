import React from "react";
import CategoriesList from "../../components/ProductCategories/CategoriesList/CategoriesList";
import "./Category.scss";
import headphonesImage from "../../assets/images/shared/desktop/image-headphones.png";
import speakersImage from "../../assets/images/shared/desktop/image-speakers.png";
import earphones from "../../assets/images/shared/desktop/image-earphones.png";
import BestGear from "../../components/BestGear/BestGear";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";

const Category = () => {
    return (
        <>
            <div className="category-name">
                <h2>HEADPHONES</h2>
            </div>

            <div className="wrapper">

                <CategoryProduct />

                <CategoriesList
                    categories={[
                        {
                            categoryImage: headphonesImage,
                            categoryName: "Headphones",
                            link: "#",
                        },
                        {
                            categoryImage: speakersImage,
                            categoryName: "Speakers",
                            link: "#",
                        },
                        {
                            categoryImage: earphones,
                            categoryName: "Earphones",
                            link: "#",
                        },
                    ]}
                />
                <BestGear />
            </div>
        </>
    );
};

export default Category;
