import React from "react";
import LinkButton from "../../Buttons/LinkButton";
import "./CategoryItem.scss";

const CategoryItem = ({ categoryImage, categoryName, link }) => {
    return (
        <div className="category">
            <img
                src={categoryImage}
                alt={categoryName}
                className="category__img"
            />
            <h6 className="category__title">{categoryName}</h6>
            <div className="category__btn">
                <LinkButton variant="tertiary" href={link}>
                    SHOP
                </LinkButton>
            </div>
        </div>
    );
};

export default CategoryItem;
