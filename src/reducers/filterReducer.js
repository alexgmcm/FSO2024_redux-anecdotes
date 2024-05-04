const initialState = ""

export const createModifyAction = (filterText) => {
    return {type:"MODIFY", payload: {filterText: filterText}}
}
const reducer = (state=initialState, action) => {
    switch (action.type){
        case "MODIFY":
            return action.payload.filterText
        default:
            return state
    }
}

export default reducer