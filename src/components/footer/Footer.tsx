import React from 'react';
import s from './Footer.module.scss'
import Title from "../common/components/title/Title";
import telegramIcon from '../../assets/image/footer/telegram.png'
import gitHubIcon from '../../assets/image/footer/githun.png'
import linkedInIcon from '../../assets/image/footer/linkedin.png'
import codewarsIcon from '../../assets/image/footer/codewars-blue.png'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <Title text={'Max Filippov'} />
                <div className={s.socialIcons}>
                    <div className={s.socialIcon}>
                        <a href={''}>
                            <img src={telegramIcon} alt={''}/>
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href={''}>
                            <img src={gitHubIcon} alt={''}/>
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href={''}>
                            <img src={linkedInIcon} alt={''}/>
                        </a>
                    </div>
                    <div className={s.socialIcon}>
                        <a href={''}>
                            <img src={codewarsIcon} alt={''}/>
                        </a>
                    </div>
                </div>
                <span className={s.copyright}>All rights reserved © 2022</span>
            </div>
        </div>
    );
};

export default Footer;