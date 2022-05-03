import React from 'react';
import s from "./Contacts.module.scss"
import Title from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";

const Contacts = () => {
    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={s.container}>
                <Title text={"Contacts"}/>
                <Fade triggerOnce>
                <form className={s.form}>
                    <input type='text' className={s.formArea} placeholder='Name'/>
                    <input type='text' className={s.formArea} placeholder='E-mail'/>
                    <textarea
                        placeholder='You can leave your beautiful message here'
                        className={s.messageArea}
                    />
                    <button type="submit">Send message</button>
                </form>
                </Fade>
            </div>
        </div>
    );
};

export default Contacts;