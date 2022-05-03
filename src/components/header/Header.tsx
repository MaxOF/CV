import React from 'react';
import Nav from "./nav/Nav";
import s from "./Header.module.css"
import {BurgerNav} from "./burgerNav/BurgerNav";

const Header = () => {
    return (
        <div className={s.header}>
            <Nav />
            <BurgerNav />
        </div>
    );
};

export default Header;