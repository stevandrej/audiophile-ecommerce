import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./CategoriesList.scss";

const CategoriesList = ({ categories, ...props }) => {
    return(
    <section className="section_categories">
        <ul className="categories">
            {categories.map((category, index) => (
                <li key={`${category.name}-${index}`}>
                    <CategoryItem
                        categoryImage={category.categoryImage}
                        categoryName={category.categoryName}
                        link={category.link}
                    />
                </li>
            ))}
        </ul>
    </section>
	);
};

export default CategoriesList;
