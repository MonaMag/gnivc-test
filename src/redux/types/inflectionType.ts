import {setWord, setDeclination, setDeclinedWord} from "../inflection-reducer";

export type DeclinationType = "nominative" | "genitive" | "dative" | "accusative" | "instrumental" | "prepositional";

export type InflectionReducerActionType =
  ReturnType<typeof setWord>
  | ReturnType<typeof setDeclination>
  | ReturnType<typeof setDeclinedWord>