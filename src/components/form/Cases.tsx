import React from 'react'
import s from './Cases.module.css'


function FormContainer() {
    console.log("CASES")
    return (
        <div className={s.container}>
            <div className={s.caseBlock}>
                <div className={s.headerTable}>
                    <div className={s.item}>Падеж</div>
                    <div className={s.item}>Вопрос</div>
                    <div className={s.item}>Склонение</div>
                </div>
                <div className={s.valueTable}>
                    <div className={s.item}>Именительный</div>
                    <div className={s.item}>Кто? Что?</div>
                    <div className={s.item}>слово</div>
                </div>
            </div>
        </div>
    )
}

export default FormContainer
