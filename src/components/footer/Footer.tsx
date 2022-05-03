import React from 'react';
import s from './Footer.module.scss'
import Title from "../common/components/title/Title";
import telegramIcon from '../../assets/image/footer/telegram.png'
import gitHubIcon from '../../assets/image/footer/githun.png'
import linkedInIcon from '../../assets/image/footer/linkedin.png'
import codewarsIcon from '../../assets/image/footer/codewars-blue.png'
import {Fade} from "react-awesome-reveal";

const Footer = () => {
    return (
        <div className={s.footer}>
            <Fade>
                <div className={s.container}>
                    <Title text={'Max Filippov'}/>
                    <div className={s.socialIcons}>
                        <div className={s.socialIcon}>
                            <a href={'https://t.me/maxkaysarow'}>
                                <img src={telegramIcon} alt={''}/>
                            </a>
                        </div>
                        <div className={s.socialIcon}>
                            <a href={'https://github.com/MaxOF'}>
                                <img src={gitHubIcon} alt={''}/>
                            </a>
                        </div>
                        <div className={s.socialIcon}>
                            <a href={'https://www.linkedin.com/in/maxim-filippov-8b194022a/'}>
                                <img src={linkedInIcon} alt={''}/>
                            </a>
                        </div>
                        <div className={s.socialIcon}>
                            <a href={'https://www.codewars.com/users/MaxOF'}>
                                <img src={codewarsIcon} alt={''}/>
                            </a>
                        </div>
                    </div>
                    <span className={s.copyright}>All rights reserved © 2022</span>
                </div>
            </Fade>
        </div>
    );
};

export default Footer;