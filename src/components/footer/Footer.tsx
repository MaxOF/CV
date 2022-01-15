import React from 'react';
import s from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2>Max Filippov</h2>
                <div className={s.refContainer}>
                    <div className={s.ref}>GitHub</div>
                    <div className={s.ref}>Telegram</div>
                    <div className={s.ref}>Gmail</div>
                    <div className={s.ref}>LinedIn</div>
                </div>
                <span>Copyright © 2022</span>
            </div>
        </div>
    );
};

export default Footer;