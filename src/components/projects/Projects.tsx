import React from 'react';
import s from './Projects.module.scss'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../../assets/image/todolist.jpg'
import socialImage from './../../assets/image/social-network.jpg'
import {Fade} from "react-awesome-reveal";

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todo = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div id='projects' className={s.projectsBlock}>
            <Fade>
            <div className={s.container} >
                <Title text={'My Projects'}/>
                <div className={s.projects}>
                    <Project style={social} title={'Social Network'} description={'a brief description'} />
                    <Project style={todo} title={'To do list'} description={'a brief description'} />
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default Projects;