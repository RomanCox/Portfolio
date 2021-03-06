import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/Title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Get in Touch'}/>
                <div className={style.contactInfo}>
                    <div className={style.formContainer}>
                        <h3>Message Me</h3>
                        <form className={style.contactForm}>
                            <div className={style.formContactBlock}>
                                <input type='text' placeholder={'Name'}/>
                                <input type='text' placeholder={'Email'}/>
                            </div>
                            <div className={style.fromMessageBlock}>
                                <textarea placeholder={'Message'}/>
                            </div>
                            <button type='submit'>Send message</button>
                        </form>
                    </div>
                    <div className={style.contactContainer}>
                        <h4>Contact Info</h4>
                        <p className={style.preContacts}>Always available for freelance work if the right project comes
                            along, Feel free to contact me!</p>
                        <ul className={style.list}>
                            <li>
                                <div className={style.liStyleContainer}>
                                    <div className={style.iconContainer}>
                                        <span className={style.iconUser}></span>
                                    </div>
                                    <div className={style.nameContainer}>
                                        <h6 className={style.nameTitle}>Name</h6>
                                        <span className={style.name}>Roman Cox</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.liStyleContainer}>
                                    <div className={style.iconContainer}>
                                        <span className={style.iconLocation}></span>
                                    </div>
                                    <div className={style.nameContainer}>
                                        <h6 className={style.nameTitle}>Location</h6>
                                        <span className={style.name}>Minsk, Belarus</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.liStyleContainer}>
                                    <div className={style.iconContainer}>
                                        <span className={`${style.iconMessenger} ${style.iconMessenger}`}></span>
                                    </div>
                                    <div className={style.nameContainer}>
                                        <h6 className={style.nameTitle}>Message / Call Me</h6>
                                        <span className={style.name}>
                                            <a
                                                href='https://t.me/romancox'
                                                className={style.link}
                                                target="_blank"
                                                title='Telegram Messenger'
                                            >{'@romancox'}</a>
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={style.liStyleContainer}>
                                    <div className={style.iconContainer}>
                                        <span className={style.iconGit}></span>
                                    </div>
                                    <div className={style.nameContainer}>
                                        <h6 className={style.nameTitle}>My GitHub</h6>
                                        <span className={style.name}>
                                            <a
                                                href='https://github.com/RomanCox'
                                                className={style.link}
                                                target="_blank"
                                                title='GitHub'
                                            >{'RomanCox'}</a>
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
