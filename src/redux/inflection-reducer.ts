import {DeclinationType, InflectionReducerActionType} from "./types/inflectionType";

const initialState = {
  word: '',
  declination: 'nominative' as DeclinationType,
  declinedWord: '' as string | null,
};

type InstanceStateType = typeof initialState;

export const inflectionReducer = (state: InstanceStateType = initialState, action: InflectionReducerActionType): InstanceStateType => {
  switch (action.type){
    case 'mona/inflectionReducer/SET_WORD':
      return {...state, word: action.word}
    case 'mona/inflectionReducer/SET_DECLINATION':
      return {...state, declination: action.declination}
    case 'mona/inflectionReducer/SET_DECLINE_WORD':
      return {...state, declinedWord: action.word}
    default:
      return state
  }
}

//*  Action creators ------------------------------------------------------------------->
export const setWord = (word: string) =>
  ({type: 'mona/inflectionReducer/SET_WORD', word} as const);
export const setDeclination = (declination: DeclinationType) =>
  ({type: 'mona/inflectionReducer/SET_DECLINATION', declination} as const);
export const setDeclinedWord = (word: string) =>
  ({type: 'mona/inflectionReducer/SET_DECLINE_WORD', word} as const);



