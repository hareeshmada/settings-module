import { initData } from "@/utils/init";

export const formDataReducer=(state=initData, action)=>{
    switch (action.type){
        case 'FORM_DATA':
            let index_of_obj
            state.formData.map((item,index)=>{
                if(item.empId=== action.payload.empId){
                    index_of_obj=index;
                }
            })
            
            if(index_of_obj !==undefined){
                return {
                    ...state,
                    formData: [
                        ...state.formData.slice(0, index_of_obj),
                        action.payload,
                        ...state.formData.slice(index_of_obj + 1)
                    ]
                }
            }
            else{
                return {
                    ...state,
                    formData:[...state.formData,action.payload]
                }
            }
        case 'REMOVE':
            let index_of_removing_obj
            state.formData.map((item,index)=>{
                if(item.empId=== action.payload){
                    index_of_removing_obj=index;
                }
            })
            return {
                ...state,
                formData: [
                    ...state.formData.slice(0, index_of_removing_obj),
                    ...state.formData.slice(index_of_removing_obj + 1)
                ]
            }
            
        default:
            return state
    }
}