import React from "react";
import Hero from "../../components/Hero/Hero";
import CategoriesList from "../../components/ProductCategories/CategoriesList/CategoriesList";
import "./Home.scss";
import headphonesImage from "../../assets/images/shared/desktop/image-headphones.png";
import speakersImage from "../../assets/images/shared/desktop/image-speakers.png";
import earphones from "../../assets/images/shared/desktop/image-earphones.png";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import BestGear from "../../components/BestGear/BestGear";

const Home = () => {
    return (
        <>
            <Hero />
            <div className="wrapper">
                <section className="section_categories">
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
                </section>
                <main>
                    <FeaturedProducts />
                </main>
                <BestGear />
            </div>
        </>
    );
};

export default Home;
