import React from 'react';
import s from "./Contacts.module.scss"
import style from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${style.container}`}>
                <Title text={"Contacts"}/>
                <form className={s.form}>
                    <input type='text' className={s.formArea} placeholder='Name'/>
                    <input type='text' className={s.formArea} placeholder='E-mail'/>
                    <textarea
                        placeholder='You can leave your beautiful message here'
                        className={s.messageArea}
                    />
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;