import React from "react";
import Button from "./components/Buttons/Button";
import InputText from "./components/Input/InputText/InputText";
import CategoryItem from "./components/ProductCategories/CategoryItem/CategoryItem";
import Footer from "./navigation/Footer/Footer";
import NavBar from "./navigation/NavBar/NavBar";

const ComponentsOverview = () => {
    return (
        <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <div className="overline">Overline text</div>
            <div className="sub-title">Sub-title text</div>
            <Button variant="primary">SEE PRODUCT</Button>
            <hr />
            <Button variant="secondary">SEE PRODUCT</Button>
            <hr />
            <Button variant="tertiary">SHOP</Button>
            <hr />
            <NavBar />
            <hr />
            <Footer />
            <hr />
            <InputText
                id="test"
                name="test"
                label="INPUT TEXT"
                placeholder="Insert your name"
                required={true}
            />
            <hr />
            <CategoryItem
                categoryImage="slika"
                categoryName="Ime kategorija"
                link="#LINK"
            />
        </div>
    );
};

export default ComponentsOverview;