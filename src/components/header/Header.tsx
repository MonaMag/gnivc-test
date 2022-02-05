import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome} from '@fortawesome/free-solid-svg-icons'


function Header() {
    console.log('HEADER')
    return (
        <div className={s.headerBlock}>
            <div className={s.headerContainer}>
                <NavLink to={'/form'} className={s.navLinkIcon}>
                    <div className={s.navLinkContext}>
                        <FontAwesomeIcon icon={faHome} size="lg"/>
                        {/*<img src={HomePage} className={s.homeIcon} alt="icon"/>*/}
                    </div>
                </NavLink>
                <NavLink to={'/form'} className={s.navLink}>
                    <div className={s.navLinkContext}>
                        <span>Склонение слов</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header
