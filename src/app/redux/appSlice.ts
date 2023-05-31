import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

export interface CounterState {
    page: number
}

const initialState: CounterState = {
    page: 1,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
    },
})


export const {setPage} = appSlice.actions

export default appSlice.reducer