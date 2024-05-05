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
const clearNotification = () => {return {notificationText:""}}

const {modifyNotification} = notificationSlice.actions 

export const setNotification = (message, timeseconds) => {
    return dispatch  => {
        dispatch(modifyNotification({notificationText: message}))
        setTimeout(() => {dispatch(modifyNotification(clearNotification()))},timeseconds * 1000)
    }

}

export default notificationSlice.reducer
