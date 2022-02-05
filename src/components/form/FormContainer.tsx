import {ChangeEvent, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {useWordCase} from '../../hooks/useWordCase';
import {setDeclination, setDeclinedWord, setName, setQuestions, setWord} from '../../redux/inflection-reducer';
import {DeclinationType, QuestionsType} from '../../redux/types/inflectionType';
import s from './FormContainer.module.css'


function FormContainer(): JSX.Element {
    const dispatch = useDispatch();
    const word = useSelector<AppStateType, string>(state => state.inflection.word);
    const currentDeclination = useSelector<AppStateType, DeclinationType>(state => state.inflection.declination);
    const declinedWord = useSelector<AppStateType, string | null>(state => state.inflection.declinedWord);
    const currentQuestions = useSelector<AppStateType, QuestionsType>(state => state.inflection.questions);
    const {toCase, cases} = useWordCase();

    const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setWord(e.currentTarget.value))
    }, [dispatch]);

    const onOptionChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDeclination(e.currentTarget.value as DeclinationType))
        dispatch(setQuestions(e.currentTarget.slot as QuestionsType))
        dispatch(setName(e.currentTarget.name as string))
        console.dir(e.currentTarget)
    }, [dispatch]);

    const getInflectedWord = (value: string, declination: DeclinationType, currentQuestions: QuestionsType) => {
        if (value.trim() !== '') {
            const decValue: string | null = toCase(value.trim(), declination)
            decValue && dispatch(setDeclinedWord(decValue))
        } else {
            console.warn('Forgot to enter a word')
        }
    }

    useEffect(() => console.log('word', word), [word])
    useEffect(() => console.log('valueSelect', currentDeclination), [currentDeclination])
    useEffect(() => console.log('declinedWord', declinedWord), [declinedWord])
    useEffect(() => console.log('currentQuestions', currentQuestions), [currentQuestions])

    return (
        <div className={s.container}>
            <div className={s.formBlock}>
                <div>
                    <p>Слово должно быть в именительном падеже единственного числа</p>
                </div>
                <div className={s.form}>
                    <div className={s.formText}>
                        <span>Введите слово:  </span>
                    </div>

                    <div className={s.formInput}>
                        <input type="text" value={word} onChange={onInputChange}/>
                    </div>

                    <div className={s.formButton}>
                        <button className={s.button}
                                onClick={() => getInflectedWord(word, currentDeclination, currentQuestions)}>Просклонять
                        </button>
                    </div>
                </div>

                <div className={s.formSelect}>
                    <label htmlFor="case">Выберите падеж: </label>

                    <div id="case">
                        {cases.map((value, index) => (
                                <label key={value + '-' + index}><input type="radio"
                                              checked={currentDeclination === value.value}
                                              value={value.value} slot={value.questions} name={value.name}
                                              onChange={onOptionChange}
                                />{value.label}</label>
                            )
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormContainer
