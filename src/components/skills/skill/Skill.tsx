import React from 'react';
import s from './Skill.module.scss'


type PropsType = {
    title: string
    style: {
        backgroundImage: string
    }
}

const Skill = (props: PropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}>

            </div>
            <div className={s.titleWrap}>
                <h3 className={s.title}>{props.title}</h3>
            </div>
        </div>
    );
};

export default Skill;