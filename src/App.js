import "./App.css";
import NavBar from "./navigation/NavBar/NavBar";
import Footer from "./navigation/Footer/Footer";
import Home from "./pages/Home/Home";
import { Route, Switch, useLocation } from "react-router-dom";
import Category from "./pages/Category/Category";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Checkout from "./pages/Checkout/Checkout";
import { useLayoutEffect } from "react";

function App() {
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({top:0, left:0, behavior: 'instant'});
    }, [location.pathname]);

    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/category/:categoryName">
                    <Category />
                </Route>
                <Route path="/product/:slug">
                    <SingleProduct />
                </Route>
                <Route path="/checkout">
                    <Checkout />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
