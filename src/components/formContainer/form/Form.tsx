import React, {ChangeEvent} from 'react'
import s from '../FormContainer.module.css'
import {CasesType} from "../../../hooks/useWordCase";
import {DeclinationType, QuestionsType} from "../../../redux/types/inflectionType";
import {RequestStatusType} from "../../../redux/app-reducer";

export type FormPropsType = {
    cases: CasesType[]
    word: string
    status: RequestStatusType
    currentQuestions: QuestionsType
    currentDeclination: DeclinationType
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionChange: (e: ChangeEvent<HTMLInputElement>) => void
    onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
    getInflectedWord: (value: string, declination: DeclinationType, currentQuestions: QuestionsType) => void
}
export const Form = ({
                         cases,
                         word,
                         status,
                         currentDeclination,
                         currentQuestions,
                         onInputChange,
                         onOptionChange,
                         onPressEnter,
                         getInflectedWord
                     }: FormPropsType) => {

    return (
        <div className={s.container}>
            <div className={s.formBlock}>
                <div className={s.explanation}>
                    <p>Слово должно быть в именительном падеже единственного числа.</p>
                </div>
                <div>
                    <div className={s.inputGroup}>
                        <div className={s.groupTitle}>Введите слово:</div>
                        <input className={s.inputGroupControl} type="text" value={word} onChange={onInputChange}
                               autoFocus/>
                    </div>
                    <div className={s.radioGroup}>
                        <div className={s.groupTitle}>Выберите падеж:
                        </div>
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

                    <input type="button" className={s.btn} value="Просклонять"
                           onClick={() => getInflectedWord(word, currentDeclination, currentQuestions)
                           }/>


                </div>
            </div>
        </div>
    )
}

