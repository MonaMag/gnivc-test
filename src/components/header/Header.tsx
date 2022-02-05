import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import HomePage from '../../assets/icon/search-homepage.png'


function Header() {
    console.log('HEADER')
    return (
        <div className={s.headerContainer}>
            <NavLink to={'/form'} className={s.navLink}>
                <div className={s.navLinkContext}>
                    <img src={HomePage} className={s.homeIcon} alt="icon"/>
                </div>
            </NavLink>
            <NavLink to={'/form'} className={s.navLink}>
                <div className={s.navLinkContext}>
                    <span>Склонение слов</span>
                </div>
            </NavLink>
        </div>
    )
}

export default Header
