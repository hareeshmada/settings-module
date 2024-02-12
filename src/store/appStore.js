import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { formDataReducer } from "@/reducers/formDataReducer"

const appStore = configureStore({
    reducer:{
        formDataReducer
    },
    middleware:()=>{
        return [logger]
    }
})

export default appStore;