import React from 'react';
import s from './Projects.module.scss'
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../../assets/image/todolist.jpg'
import socialImage from './../../assets/image/social-network.jpg'
import flashcardsImage from './../../assets/image/flashcards.jpg'
import {Fade} from "react-awesome-reveal";

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todo = {
        backgroundImage: `url(${todoImage})`
    }
    const flashcards = {
        backgroundImage: `url(${flashcardsImage})`
    }
    const socialDescription = 'Used technologies: React/Redux-Toolkit/ TypeScript/React-router-dom v6/Axios /Material UI/Formik/SCSS/Git, GitHub.\n' +
        'Creating learning app in team with using git, work with axios(CRUD).'
    const todoDescription = 'Used technologies: React/Redux/Redux-Toolkit/ React-router-dom v6/ Jest(Unit-Tests) /Storybook/Axios /Formik/Material UI;\n' +
        'Todolist app created with react hooks, routing and redirects, material UI, REST api request/response flow, unit-tests and etc'
    const cardsDescription = 'Used technologies: React/Redux-thunk/TypeScript/React-router-dom v6/Axios/Flex/Formik/Git, GitHub.\n' +
        'Creating learning app in team with using git, work with axios(CRUD).'

    return (
        <div id='projects' className={s.projectsBlock}>
            <Fade>
            <div className={s.container} >
                <Title text={'My Projects'}/>
                <div className={s.projects}>
                    <Project style={social} title={'Social Network'} description={socialDescription} />
                    <Project style={todo} title={'To do list'} description={todoDescription} />
                    <Project style={flashcards} title={'Flashcards'} description={cardsDescription} />
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default Projects;