import React from 'react';
import s from './RemoteWork.module.css'



const RemoteWork = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={s.container}>
                <h2>Remote work</h2>
                <button>Hire me</button>
            </div>
        </div>
    );
};

export default RemoteWork;