import React, {useState} from 'react'
import s from './Cases.module.css'
import { useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import { QuestionsType} from "../../redux/types/inflectionType";



export const Cases = () => {
    console.log("CASES")

    const [copiedWord, setCopiedWord] = useState<string | null>(null);

    const copyToClipboard = (declinedWord: string): void => {
        navigator.clipboard.writeText(declinedWord).then(() => {
            setCopiedWord(declinedWord);
        })
    };


    const declinedWord = useSelector<AppStateType, string | null>(state => state.inflection.declinedWord);
    const name = useSelector<AppStateType, string>(state => state.inflection.name);
    //const currentDeclination = useSelector<AppStateType, DeclinationType>(state => state.inflection.declination);
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
                {/*    <div className={s.item}>{question[currentDeclination]}</div>*/}
                    <div className={s.item}>{currentQuestions}</div>
                    {declinedWord && <div className={s.item}>{declinedWord}
                        <button className={s.caseBlockBtn} onClick={() => copyToClipboard(declinedWord)}>Copy</button></div>}
                </div>

            </div>
        </div>
    )
}


