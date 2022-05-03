import React from 'react';
import s from './RemoteWork.module.scss'
import Title from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";


const RemoteWork = () => {
    return (
        <div className={s.remoteBlock}>
            <Fade>
                <div className={s.container}>
                    <Title text={'Remote work'}/>
                    <button>Hire me</button>
                </div>
            </Fade>
        </div>
    );
};

export default RemoteWork;