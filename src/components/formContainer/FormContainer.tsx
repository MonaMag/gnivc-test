import {ChangeEvent, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {useWordCase} from '../../hooks/useWordCase';
import {setDeclination, setDeclinedWord, setName, setQuestions, setWord} from '../../redux/inflection-reducer';
import {DeclinationType, QuestionsType} from '../../redux/types/inflectionType';
import s from './FormContainer.module.css'
import {Form} from "./form/Form";
import {RequestStatusType, setStatus} from "../../redux/app-reducer";


function FormContainer(): JSX.Element {
    const dispatch = useDispatch();
    const word = useSelector<AppStateType, string>(state => state.inflection.word);
    const currentDeclination = useSelector<AppStateType, DeclinationType>(state => state.inflection.declination);
    const currentQuestions = useSelector<AppStateType, QuestionsType>(state => state.inflection.questions);
    const status = useSelector<AppStateType, RequestStatusType>(state => state.app.status)
    const {toCase, cases} = useWordCase();

    const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setWord(e.currentTarget.value))
    }, [dispatch])

    const onOptionChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStatus('loading'))
        dispatch(setDeclination(e.currentTarget.value as DeclinationType))
        dispatch(setQuestions(e.currentTarget.slot as QuestionsType))
        dispatch(setName(e.currentTarget.name as string))
        dispatch(setStatus('succeeded'))
    }, [dispatch])

    const getInflectedWord = (value: string, declination: DeclinationType, currentQuestions: QuestionsType) => {
        if (value.trim() !== '') {
            const decValue: string | null = toCase(value.trim(), declination)
            decValue && dispatch(setDeclinedWord(decValue))
        } else {
            console.warn('Forgot to enter a word')
        }
    }
    const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') getInflectedWord(word, currentDeclination, currentQuestions)
    }

    return (
        <div className={s.container}>
            {/* <div className={s.formBlock}>
                <div className={s.explanation}>
                    <p>Слово должно быть в именительном падеже единственного числа.</p>
                </div>
                <div className={s.formContainer}>
                    <div className={s.formText}>
                        <span>Введите слово:  </span>
                    </div>

                    <div className={s.formInput}>
                        <input type="text" value={word} onChange={onInputChange}/>
                    </div>
                </div>
                <div>
                <div className={s.formSelect}>
                    <span>Выберите падеж: </span>
                    <div className={s.formRadio}>
                        {cases.map((value, index) => (
                                <label key={value + '-' + index}><input type="radio"
                                              checked={currentDeclination === value.value}
                                              value={value.value} slot={value.questions} name={value.name}
                                              onChange={onOptionChange} onKeyPress={onPressEnter}
                                />{value.label}</label>
                            )
                        )
                        }
                    </div>
                </div>
                    <div className={s.formButton}>
                        <button className={s.button}
                                onClick={() => getInflectedWord(word, currentDeclination, currentQuestions)
                                }>Просклонять
                        </button>
                    </div>
                </div>
            </div>*/}
            <Form
                cases={cases}
                word={word}
                status={status}
                currentDeclination={currentDeclination}
                currentQuestions={currentQuestions}
                onInputChange={onInputChange}
                onOptionChange={onOptionChange}
                onPressEnter={onPressEnter}
                getInflectedWord={getInflectedWord}

            />
        </div>
    )
}

export default FormContainer
