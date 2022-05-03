import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
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
        </div>
    );
};

export default Main;