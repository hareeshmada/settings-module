import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { formDataReducer } from "@/reducers/formDataReducer"
import { loginOrLogoutReducer } from "@/reducers/loginOrLogoutReducer"

const appStore = configureStore({
    reducer:{
        formDataReducer,
        loginOrLogoutReducer
    },
    middleware:()=>{
        return [logger]
    }
})

export default appStore;