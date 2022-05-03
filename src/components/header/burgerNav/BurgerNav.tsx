import React from 'react';
import s from './BurgerNav.module.scss'


export const BurgerNav = () => {
    return (
        <div className={s.burgerNav}>
            <div className={s.burgerNavItems}>
                <a href="">Main</a>
                <a href="">About</a>
                <a href="#projects">Projects</a>
                <a href="">Contacts</a>
            </div>
            <div className={s.burgerBtn}></div>
        </div>
    );
};