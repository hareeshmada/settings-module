'use client'
import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

const isAuth = (WrappedComponent) => {
    
    return function Wrapper(props){
        const router=useRouter();
        const isLoggedIn=useSelector(state => state.loginOrLogoutReducer.loggedIn);
        const token=localStorage.getItem('authToken');
        const tokenExpiry=localStorage.getItem('authTokenExpiry');
        const now = new Date().getTime();
        useEffect(() => {
          if (!token || !tokenExpiry || now >= tokenExpiry) {
            // Session has expired or no token available
            alert('Session expired');
            localStorage.removeItem('authToken');
            localStorage.removeItem('authTokenExpiry');
            router.push('/login'); // Use useRouter's push method for client-side navigation
          }
        }, [token, tokenExpiry, now, router]);
    
        if (!token || !tokenExpiry || now >= tokenExpiry) {
          // Prevent rendering the component until the check is complete
          return null;
        }
          console.log("success");
          return <WrappedComponent {...props} />;
          
    }
  
}
export default isAuth;
