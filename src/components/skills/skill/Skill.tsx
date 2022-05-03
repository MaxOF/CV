import React from 'react';
import s from './Skill.module.scss'


type PropsType = {
    title: string
    description: string
}

const Skill = (props: PropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img src={''} alt='logo'/>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

export default Skill;