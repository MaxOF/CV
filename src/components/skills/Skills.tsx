import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'} />
                <div className={s.skills}>
                    <Skill title={'TS'} description={"Lorem ipsum"}/>
                    <Skill title={'React'} description={"Lorem ipsum"}/>
                    <Skill title={'CSS'} description={"Lorem ipsum"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;