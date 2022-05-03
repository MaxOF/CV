import React from 'react';
import s from './Main.module.scss'
import {Fade} from 'react-awesome-reveal';

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <Fade>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>Hi There</span>
                    <span>I am Max <span>Filippov</span></span>
                    <h1>Front-end Developer</h1>
                </div>
                <div className={s.photo}>
                    <div className={s.image}>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default Main;