import { createContext, useState } from "react";

export const UserDataContext= createContext({});

export function UserProvider ({children}){
    const [user, setUser]= useState({username:'default name',email:'default@gmail.com',age:'23'});

    const updateUser= (newUserData)=>{
        setUser((prevUser)=>({...prevUser,...newUserData}));
    }

    return (
        <UserDataContext.Provider value={{user, updateUser}}>
            {children}
        </UserDataContext.Provider>
    )
}