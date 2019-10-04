import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={`${style.item} ${style.active}`}>
                <a>Profile</a>
            </div>
            <div className={style.item}>
                <a href=''>Messages</a>
            </div>
            <div className={style.item}>
                <a href='https://yandex.by'>News</a>
            </div>
            <div className={style.item}>
                <a href='https://yandex.by'>Music</a>
            </div>
            <div className={style.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;