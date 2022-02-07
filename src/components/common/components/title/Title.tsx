import React from 'react';
import s from './Title.module.scss'


type PropsType = {text: string}

const Title = ({text}: PropsType) => {
    return (
        <div className={s.title}>
            <h2>{text}</h2>
        </div>
    );
};

export default Title;