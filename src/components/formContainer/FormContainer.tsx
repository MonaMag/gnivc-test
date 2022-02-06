import {ChangeEvent, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {useWordCase} from '../../hooks/useWordCase';
import {setDeclination, setDeclinedWord, setName, setQuestions, setWord} from '../../redux/inflection-reducer';
import {DeclinationType, QuestionsType} from '../../redux/types/inflectionType';
import s from './FormContainer.module.css'
import {Form} from "./form/Form";
import {setStatus} from "../../redux/app-reducer";


function FormContainer(): JSX.Element {
    const dispatch = useDispatch();

    const word = useSelector<AppStateType, string>(state => state.inflection.word);
    const currentDeclination = useSelector<AppStateType, DeclinationType>(state => state.inflection.declination);
    const currentQuestions = useSelector<AppStateType, QuestionsType>(state => state.inflection.questions);
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
            <Form
                cases={cases}
                word={word}
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
