import React, {useState} from 'react'
import s from './Cases.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {DeclinationType, QuestionsType} from "../../redux/types/inflectionType";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCopy} from '@fortawesome/free-regular-svg-icons'


export const Cases = () => {
    console.log("CASES")

    const [copiedWord, setCopiedWord] = useState<string>('');

    const copyToClipboard = (declinedWord: string): void => {
        navigator.clipboard.writeText(declinedWord).then(() => {
            setCopiedWord(declinedWord);
        })
    };


    const declinedWord = useSelector<AppStateType, string>(state => state.inflection.declinedWord);
    const name = useSelector<AppStateType, string>(state => state.inflection.name);
    const currentDeclination = useSelector<AppStateType, DeclinationType>(state => state.inflection.declination);
    const currentQuestions = useSelector<AppStateType, QuestionsType>(state => state.inflection.questions);


    return (
        <div className={s.container}>
            <div className={s.caseBlock}>

                <div className={s.headerTable}>
                    <div className={s.item}>Падеж</div>
                    <div className={s.item}>Вопрос</div>
                    <div className={s.item}>Склонение</div>
                </div>

                <div className={s.valueTable}>
                    <div className={s.item}>{name}</div>
                    <div className={s.item}>{currentQuestions}</div>

                    {currentDeclination !== 'nominative'
                        ? <div className={s.item}>{declinedWord}
                            {declinedWord &&
                                <div className={s.tooltipOnHover}>
                                    <a className={s.wordCopy} onClick={() => copyToClipboard(declinedWord)}><FontAwesomeIcon icon={faCopy} id="icon"/>
                                    </a>
                                </div>
                            }
                            <div className={s.tooltip}>Copy word</div>
                        </div>
                        : ''}
                </div>
            </div>
        </div>
    )
}


