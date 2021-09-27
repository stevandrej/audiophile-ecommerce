import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.scss";

const Menu = () => {
    const renderMenuItems = () => {
        const menuItems = ["headphones", "speakers", "earphones"];

        const itemHome = (
            <li key="home">
                <NavLink exact to={`/`} activeStyle={{ fontWeight: "bold" }}>
                    Home
                </NavLink>
            </li>
        );

        const menu = menuItems.map((item) => (
            <li key={item}>
                <NavLink
                    to={`/category/${item}`}
                    activeStyle={{ fontWeight: "bold" }}
                >
                    {item}
                </NavLink>
            </li>
        ));

        menu.unshift(itemHome);
        return menu;
    };

    return <ul className={styles.menu}>{renderMenuItems()}</ul>;
};

export default Menu;
