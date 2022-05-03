import React from 'react';
import s from './Button.module.scss'

type PropsType = {
    text: string
}

export const Button = ({text}: PropsType) => {
    return (
        <a href={''} className={s.btn}>{text}</a>
    );
};
