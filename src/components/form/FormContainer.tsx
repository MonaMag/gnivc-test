import {ChangeEvent, useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {useWordCase} from '../../hooks/useWordCase';
import {setDeclination, setDeclinedWord, setWord} from '../../redux/inflection-reducer';
import {DeclinationType} from '../../redux/types/inflectionType';
import s from './FormContainer.module.css'


function FormContainer(): JSX.Element {
    const dispatch = useDispatch();
    const word = useSelector<AppStateType, string>(state => state.inflection.word);
    const currentDeclination = useSelector<AppStateType, DeclinationType>(state => state.inflection.declination);
    const declinedWord = useSelector<AppStateType, string | null>(state => state.inflection.declinedWord);
    const {toCase, casess} = useWordCase();

    const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setWord(e.currentTarget.value))
    }, [dispatch]);

    const onSelectChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setDeclination(e.currentTarget.value as DeclinationType))
    }, [dispatch]);

    const getObsceneWord = (value: string, declination: DeclinationType) => {
        if (value.trim() !== '') {
            const decValue: string | null = toCase(value.trim(), declination)
            decValue && dispatch(setDeclinedWord(decValue))
        }
        else {
            console.warn('Forgot to enter a word')
        }
    }

    useEffect(() => console.log('word', word), [word])
    useEffect(() => console.log('valueSelect', currentDeclination), [currentDeclination])
    useEffect(() => console.log('declinedWord', declinedWord), [declinedWord])

    return (
        <div className={s.container}>
            <div className={s.formBlock}>
                <div className={s.form}>
                    <div className={s.formText}>
                        <span>Введите слово:  </span>
                    </div>

                    <div className={s.formInput}>
                        <input type="text" value={word} onChange={onInputChange} />
                    </div>
                    <div>
                        <button onClick={() => getObsceneWord(word, currentDeclination)}>Просклонять</button>
                    </div>

                    <div className={s.formSelect}>
                        <label htmlFor="case">Выберите падеж: </label>

                        <select name="case" id="case" onChange={onSelectChange}>
                            {casess.map((value, index) => ( 
                                <option key={value + '-' + index} value={value.value}>{value.lable}</option>
                                )
                            )}
                        </select>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FormContainer
