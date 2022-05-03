import React from 'react';
import Nav from "./nav/Nav";
import s from "./Header.module.css"

const Header = () => {
    return (
        <div className={s.header}>
            <Nav />
        </div>
    );
};

export default Header;