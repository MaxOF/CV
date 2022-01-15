import React from 'react';
import s from './Project.module.css'

type PropsType = {
    title: string
    description: string
}

const Project = (props: PropsType) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <button className={s.button}>See</button>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

export default Project;