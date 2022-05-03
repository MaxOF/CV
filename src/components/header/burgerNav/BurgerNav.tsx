import React, {useState} from 'react';
import s from './BurgerNav.module.scss'


export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState<boolean>(false)

    let onClickBurgerBtn = () => {
        setMenuIsOpen(!menuIsOpen)
        setHamburgerIsOpen(!hamburgerIsOpen)
    }

    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <a href="">Main</a>
                <a href="">About</a>
                <a href="#projects">Projects</a>
                <a href="">Contacts</a>
            </div>
            <div className={s.wrapperBtn}>
                <div className={hamburgerIsOpen? s.hamburgerIconOpen : s.hamburgerIcon}
                     onClick={onClickBurgerBtn}/>
            </div>
        </div>
    );
};