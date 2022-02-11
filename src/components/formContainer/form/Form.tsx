import React, {ChangeEvent, useCallback} from 'react'
import s from '../FormContainer.module.css'
import {CasesType} from "../../../hooks/useWordCase";
import {DeclinationType, QuestionsType} from "../../../redux/types/inflectionType";
import {setDeclination, setName, setQuestions, setWord} from "../../../redux/inflection-reducer";
import {useDispatch} from "react-redux";

export type FormPropsType = {
    cases: CasesType[]
    word: string
    currentQuestions: QuestionsType
    currentDeclination: DeclinationType
    onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
    getInflectedWord: (value: string, declination: DeclinationType, currentQuestions: QuestionsType) => void
}
export const Form = ({
                         cases,
                         word,
                         currentDeclination,
                         currentQuestions,
                         onPressEnter,
                         getInflectedWord
                     }: FormPropsType) => {
    console.log('Form')
    const dispatch = useDispatch();


    const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setWord(e.currentTarget.value))
        console.log(e.currentTarget.value)
    }, [dispatch])

    const onOptionChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDeclination(e.currentTarget.value as DeclinationType))
        dispatch(setQuestions(e.currentTarget.slot as QuestionsType))
        dispatch(setName(e.currentTarget.name as string))
    }, [dispatch])

    return (
        <div className={s.formContainer}>
            <div className={s.formBlock}>
                <div className={s.formImg}>
                </div>

                <div className={s.inputGroup}>
                    <div className={s.groupTitle}>Введите слово:</div>
                    <input className={s.inputGroupControl} type="text" value={word} onChange={onInputChange}
                           autoFocus/>
                </div>

                <div className={s.explanation}>
                    <span>Слово должно быть в именительном падеже единственного числа.</span>
                </div>

                <div className={s.radioGroup}>
                    <div className={s.groupTitle}>Выберите падеж:
                    </div>
                    <div className={s.radioGroupControlWrapper}>
                        {cases.map((value, index) => (
                            <div className={s.radioGroupControl} key={value + '-' + index}>
                                <label>
                                    <input type="radio"
                                           checked={currentDeclination === value.value}
                                           value={value.value} slot={value.questions}
                                           name={value.name}
                                           onChange={onOptionChange}
                                           onKeyPress={onPressEnter}
                                           className={s.radioGroupControlItem}
                                    />{value.label}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <input type="button" className={s.btn} value="Просклонять"
                       onClick={() => getInflectedWord(word, currentDeclination, currentQuestions)
                       }/>
            </div>
        </div>
    )
}

