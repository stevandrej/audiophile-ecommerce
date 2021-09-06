import "./App.css";
import { useDispatch } from "react-redux";
import * as actions from "./redux/actions/products";
import { useEffect } from "react";
import NavBar from "./navigation/NavBar/NavBar";
import Footer from "./navigation/Footer/Footer";
import Home from "./pages/Home/Home";
import { Route, Switch } from "react-router-dom";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.startGetProducts("./data.json"));
    }, [dispatch]);

    return (
        <div className="App">
			<NavBar />
				<Switch>
					<Route exact path="/">
						<Home/>
					</Route>
				</Switch>
			<Footer/>
        </div>
    );
}

export default App;
