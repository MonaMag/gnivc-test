import {setWord, setDeclination, setDeclinedWord, setQuestions, setName} from "../inflection-reducer";

export type DeclinationType = "nominative" | "genitive" | "dative" | "accusative" | "instrumental" | "prepositional";
export type QuestionsType = "Кто? Что?" | "Кого? Чего?" | "Кому? Чему?" | "Кого? Что?" | "Кем? Чем?" | "О ком? О чем?";


export type InflectionReducerActionType =
  ReturnType<typeof setWord>
  | ReturnType<typeof setName>
  | ReturnType<typeof setDeclination>
  | ReturnType<typeof setDeclinedWord>
  | ReturnType<typeof setQuestions>