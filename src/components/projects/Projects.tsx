import React from 'react';
import s from './Projects.module.css'
import Project from "./project/Project";
import style from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

const Projects = () => {
    return (
        <div className={s.projectBlock}>
            <div className={style.container}>
                <Title text={'My Projects'}/>
                <div className={s.projects}>
                    <Project title={'Social Network'} description={'a brief description'} />
                    <Project title={'To do'} description={'a brief description'} />
                </div>
            </div>
        </div>
    );
};

export default Projects;