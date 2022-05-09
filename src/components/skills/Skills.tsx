import React from 'react';
import s from './Skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import tsLogo from "../../assets/image/skills/Typescript.jpg";
import reactLogo from "../../assets/image/skills/React.jpg";
import reduxLogo from "../../assets/image/skills/Redux.jpg";
import axiosLogo from "../../assets/image/skills/axios.jpg";
import jestLogo from "../../assets/image/skills/jest.jpg";
import postmanLogo from "../../assets/image/skills/postman.jpg";
import muiLogo from "../../assets/image/skills/MUI.jpg";
import formikLogo from "../../assets/image/skills/formik.jpg";
import scssLogo from "../../assets/image/skills/scss.jpg";


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
    const axios = {
        backgroundImage: `url(${axiosLogo})`
    }
    const jest = {
        backgroundImage: `url(${jestLogo})`
    }
    const postman = {
        backgroundImage: `url(${postmanLogo})`
    }
    const mui = {
        backgroundImage: `url(${muiLogo})`
    }
    const formik = {
        backgroundImage: `url(${formikLogo})`
    }
    const scss = {
        backgroundImage: `url(${scssLogo})`
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
                    <Skill title={'Jest/TDD'} style={jest}/>
                    <Skill title={'Axios'} style={axios}/>
                    <Skill title={'Postman'} style={postman}/>
                    <Skill title={'Formik'} style={formik}/>
                    <Skill title={'Material UI'} style={mui}/>
                    <Skill title={'SCSS'} style={scss}/>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default Skills;