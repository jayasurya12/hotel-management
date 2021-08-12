const initialState={
    user:[],
   
}

export const userReducer=(state=initialState,action)=>{

    switch (action.type) {

        case 'SET_USER':
           return{
               user:[...state.user,action.payload]
           }
        case "EDIT_USER":
           const userIndex=state.user.filter((user,index)=> action.userId === index)
           const reminevalue=state.user.filter((user,index)=>action.userId !== index)
            return{
                user:[...reminevalue],
                edit:[...userIndex]
            }

        case "DELETE_USER":
            const remaineData=state.user.filter((user,index)=> action.deleteId !==user)
            return{
                user:[...remaineData]
            }
        case "UPDATE_USER":

        default:
            return state
    }
}
