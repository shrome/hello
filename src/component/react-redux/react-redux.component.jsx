import {add_item} from "../../redux/action"


export const mapStateToProps =(state)=>{
    return{
      list : state
    }
}
  
export const mapDispatch = (dispatch) =>{
    return{
      addNewMessage : (message) =>{
        dispatch(add_item(message))
      }
    }
}