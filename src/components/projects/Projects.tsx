import React from 'react';
import s from './Projects.module.scss'
import Project from './project/Project';
import style from '../common/styles/Container.module.css'
import Title from '../common/components/title/Title';
import todoImage from './../../assets/image/todolist.jpg'
import socialImage from './../../assets/image/social-network.jpg'

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todo = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div className={s.projectBlock}>
            <div className={`${style.container} ${s.projectContainer}`} >
                <Title text={'My Projects'}/>
                <div className={s.projects}>
                    <Project style={social} title={'Social Network'} description={'a brief description'} />
                    <Project style={todo} title={'To do list'} description={'a brief description'} />
                </div>
            </div>
        </div>
    );
};

export default Projects;