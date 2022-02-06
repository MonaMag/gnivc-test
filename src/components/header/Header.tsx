import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from "react-redux";
import {setDeclination, setDeclinedWord, setName, setQuestions, setWord} from "../../redux/inflection-reducer";
import {DeclinationType, QuestionsType} from "../../redux/types/inflectionType";


function Header() {
    const dispatch = useDispatch();

    const goHomePageHandler = () => {
        dispatch(setWord(''))
        dispatch(setName(''))
        dispatch(setDeclination('' as DeclinationType))
        dispatch(setQuestions('' as QuestionsType))
        dispatch(setDeclinedWord(''))
    }

    return (
        <div className={s.headerContainer}>
            <NavLink to={'/'} className={s.navLinkIcon} onClick={goHomePageHandler}>
                <FontAwesomeIcon icon={faHome} size="lg"/>
            </NavLink>
            <div className={s.title}>Склонение слов онлайн</div>
        </div>
    )
}

export default Header
