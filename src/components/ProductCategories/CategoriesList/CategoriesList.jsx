import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CategoryItem from "../CategoryItem/CategoryItem";
import * as actions from "../../../redux/actions/categories";
import "./CategoriesList.scss";
import { useSelector } from "react-redux";

const CategoriesList = () => {
    const dispatch = useDispatch();
    const categoriesState = useSelector((state) => state.categoriesReducer);

    useEffect(() => {
        if (categoriesState.categories.length === 0)
            dispatch(actions.startGetCategories("/categories.json"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { loading, categories } = categoriesState;

    return (
        <section className="section_categories">
            <ul className="categories">
                {loading
                    ? "Loading data"
                    : categories
                    ? categories.map((category, index) => (
                          <li key={`${category.name}-${index}`}>
                              <CategoryItem
                                  categoryImage={category.categoryImage}
                                  categoryName={category.categoryName}
                                  link={category.link}
                              />
                          </li>
                      ))
                    : "No category was found."}
            </ul>
        </section>
    );
};

export default CategoriesList;
