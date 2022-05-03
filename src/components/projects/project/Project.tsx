import React from 'react';
import s from './Project.module.scss'

type PropsType = {
    title: string
    description: string
    style: {
        backgroundImage: string
    }
}

const Project = (props: PropsType) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer} style={props.style}>
                <a className={s.refToProject} href="">See</a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;