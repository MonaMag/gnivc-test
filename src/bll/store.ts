import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {appReducer} from "../redux/app-reducer";
import {inflectionReducer} from "../redux/inflection-reducer";




const rootReducer = combineReducers({
    app: appReducer,
    inflection: inflectionReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>


//* Common thunk type
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>

//@ts-ignore
window.store = store