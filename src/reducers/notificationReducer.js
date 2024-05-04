import { createSlice } from '@reduxjs/toolkit'

const initialState = ""

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        modifyNotification(state,action){
            return action.payload.notificationText
        }
    },
})

export const {modifyNotification} = notificationSlice.actions 

export default notificationSlice.reducer
