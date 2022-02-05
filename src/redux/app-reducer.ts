
export type AppReducerStateType = {
    status: RequestStatusType
}
export type AppReducerActionsType = ReturnType<typeof setStatus>
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initState = {
    status: 'idle' as RequestStatusType,
}


export const appReducer =(state: AppReducerStateType = initState, action: AppReducerActionsType): AppReducerStateType => {
    switch (action.type) {
        case 'mona/appReducer/SET_STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}


//*  Action creators ------------------------------------------------------------------->

export const setStatus = (status: RequestStatusType) =>
    ({type: 'mona/appReducer/SET_STATUS', status} as const)
