import { initData } from "@/utils/init";

export const formDataReducer=(state=initData, action)=>{
    switch (action.type){
        case 'FORM_DATA':
            return {
                ...state,
                formData:[...state.formData,action.payload]
            }
        default:
            return state
    }
}