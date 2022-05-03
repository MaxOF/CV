import React from 'react';
import s from "./Contacts.module.scss"
import style from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${style.container}`}>
                <h2 className={s.title}>Contacts</h2>
                <div className={s.formContainer}>
                    <form className={s.formBlock}>
                        <input className={s.input}/>
                        <input className={s.input}/>
                        <textarea
                            placeholder='You can leave your beautiful message here'
                            className={s.textarea}
                        >
                    </textarea>
                    </form>
                </div>
                <button type="submit" className={s.button}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;