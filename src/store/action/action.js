import ActionTypes from "../constant/constant"


export const Adtodo = (todo)=>{
   return dispatch => {
       dispatch({
           type:ActionTypes.ADD_TODO,
           payload:todo
       })
   }
}