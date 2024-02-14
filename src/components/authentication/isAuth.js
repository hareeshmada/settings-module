'use client'
import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

const isAuth = (WrappedComponent) => {
    
    return function Wrapper(props){
        const isLoggedIn=useSelector(state => state.loginOrLogoutReducer.loggedIn);

        useEffect(() => {
            if (!isLoggedIn) {
                console.log("not athorized!!")
              return redirect("/login");
            }
          }, []);
      
      
          if (!isLoggedIn) {
            return null;
          }
          console.log("success");
        return <WrappedComponent {...props} />;
    }
  
}
export default isAuth;
