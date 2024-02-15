import { initlog } from "@/utils/init";

export const loginOrLogoutReducer=(state=initlog,action)=>{
    switch(action.type){
        case "LOGGED":
            return {
                ...state,
                loggedIn:action.payload
            }
        default:
            return state
    }
}