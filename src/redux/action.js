export const ADD_TO = "ADD_TO"
export const DELETE ="DELETE"

export const add_item = (input) =>{
    return {
        type: ADD_TO,
        input
    }
}

export const delete_item = (item) =>{
    return{
        type:DELETE,
        item
    }
}