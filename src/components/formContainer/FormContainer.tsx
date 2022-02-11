import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {useWordCase} from '../../hooks/useWordCase';
import {setDeclinedWord} from '../../redux/inflection-reducer';
import {DeclinationType, QuestionsType} from '../../redux/types/inflectionType';
import s from './FormContainer.module.css'
import {Form} from "./form/Form";


function FormContainer(): JSX.Element {
    console.log('FormContainer')
    const dispatch = useDispatch();

    const word = useSelector<AppStateType, string>(state => state.inflection.word);
    const currentDeclination = useSelector<AppStateType, DeclinationType>(state => state.inflection.declination);
    const currentQuestions = useSelector<AppStateType, QuestionsType>(state => state.inflection.questions);
    const {toCase, cases} = useWordCase();


    const getInflectedWord = (value: string, declination: DeclinationType) => {
        if (value.trim() !== '') {
            const decValue: string | null = toCase(value.trim(), declination)
            decValue && dispatch(setDeclinedWord(decValue))
        } else {
            console.warn('Forgot to enter a word')
        }
    }
    const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') getInflectedWord(word, currentDeclination)
    }

    return (
        <div className={s.container}>
            <Form
                cases={cases}
                word={word}
                currentDeclination={currentDeclination}
                currentQuestions={currentQuestions}
                onPressEnter={onPressEnter}
                getInflectedWord={getInflectedWord}
            />
        </div>
    )
}

export default FormContainer
