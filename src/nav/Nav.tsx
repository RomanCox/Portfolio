import React from 'react';
import style from './Nav.module.scss';

export const Nav = () => {
    return (
        <nav className={style.header}>
            <a>
                <img></img>
            </a>
            <div className={style.navButtonContainer}>
                BUTTON
            </div>
            <div className={style.navContainer}>
                <ul className={style.navbar}>
                    <li className={style.navbarItem}>
                    <a href='' className={style.navLink}>Main</a>
                    </li>
                    <li className={style.navbarItem}>
                    <a href='' className={style.navLink}>My Skillz</a>
                    </li>
                    <li className={style.navbarItem}>
                    <a href='' className={style.navLink}>My Projects</a>
                    </li>
                    <li className={style.navbarItem}>
                    <a href='' className={style.navLink}>My Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
