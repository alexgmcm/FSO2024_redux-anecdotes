import { createSlice } from '@reduxjs/toolkit'

const initialState = ""

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        modifyFilter(state,action){
            return action.payload.filterText
        }
    },
})

export const {modifyFilter} = filterSlice.actions 

export default filterSlice.reducer

