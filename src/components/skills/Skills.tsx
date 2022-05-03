import React from 'react';
import s from './Skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import tsLogo from "../../assets/image/skills/Typescript.jpg";
import reactLogo from "../../assets/image/skills/React.jpg";
import reduxLogo from "../../assets/image/skills/Redux.jpg";

const Skills = () => {

    const ts = {
        backgroundImage: `url(${tsLogo})`
    }
    const react = {
        backgroundImage: `url(${reactLogo})`
    }
    const redux = {
        backgroundImage: `url(${reduxLogo})`
    }



    return (
        <div id='skills' className={s.skillsBlock}>
            <Fade>
            <div className={s.container}>
                <Title text={'Skills'} />
                <div className={s.skills}>
                    <Skill title={'TypeScript'} style={ts}/>
                    <Skill title={'React'} style={react}/>
                    <Skill title={'Redux'} style={redux}/>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default Skills;