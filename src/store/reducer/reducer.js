import ActionTypes from "../constant/constant"

let INITAL_STATE = {
    AddTodo: [],
}


export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return ({
                ...state,
                AddTodo: [...state.AddTodo, action.payload]
            })

        default:
            return state

    }
}