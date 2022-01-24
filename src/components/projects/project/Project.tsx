import React from 'react';
import s from './Project.module.css'

type PropsType = {
    title: string
    description: string
}

const Project = (props: PropsType) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <a className={s.refToProject} href="">See</a>
            </div>
            <span className={s.title}>{props.title}</span>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

export default Project;