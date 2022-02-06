import {DeclinationType, InflectionReducerActionType, QuestionsType} from "./types/inflectionType";

const initialState = {
    word: '',
    name: 'Именительный',
    declination: 'nominative' as DeclinationType,
    declinedWord: '' as string,
    questions: 'Кто? Что?' as QuestionsType,
};

type InstanceStateType = typeof initialState;

export const inflectionReducer = (state: InstanceStateType = initialState, action: InflectionReducerActionType): InstanceStateType => {
    switch (action.type) {
        case 'mona/inflectionReducer/SET_WORD':
            return {...state, word: action.word}
        case 'mona/inflectionReducer/SET_NAME':
            return {...state, name: action.name}
        case 'mona/inflectionReducer/SET_DECLINATION':
            return {...state, declination: action.declination}
        case 'mona/inflectionReducer/SET_DECLINE_WORD':
            return {...state, declinedWord: action.word}
        case 'mona/inflectionReducer/SET_QUESTIONS':
            return {...state, questions: action.questions}
        default:
            return state
    }
}

//*  Action creators ------------------------------------------------------------------->
export const setWord = (word: string) =>
    ({type: 'mona/inflectionReducer/SET_WORD', word} as const);
export const setName = (name: string) =>
    ({type: 'mona/inflectionReducer/SET_NAME', name} as const);
export const setDeclination = (declination: DeclinationType) =>
    ({type: 'mona/inflectionReducer/SET_DECLINATION', declination} as const);
export const setDeclinedWord = (word: string) =>
    ({type: 'mona/inflectionReducer/SET_DECLINE_WORD', word} as const);
export const setQuestions = (questions: QuestionsType) =>
    ({type: 'mona/inflectionReducer/SET_QUESTIONS', questions} as const);



