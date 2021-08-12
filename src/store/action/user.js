export const User=(user)=>{
    return{
        type:"SET_USER",
        payload:user
    }
}
export const Edit=(index)=>{
    return{
        type:"EDIT_USER",
        userId:index
    }
}

export const Delete=(del)=>{
    return{
        type:"DELETE_USER",
        deleteId:del
    }
}

export const update=(updateId)=>{
    return{
        type:"UPDATE_USER",
        updateUserId:updateId
    }
}