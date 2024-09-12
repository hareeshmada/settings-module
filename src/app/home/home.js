'use client'
import React from 'react'
import { Dashboard } from '@/components/dashboard/dashboard'
import isAuth from '@/components/authentication/isAuth'

let Home=(props)=> {
  return (
    <>
    <Dashboard/>
    <div>welcome to the web application</div>
    </>
  )
}
export default isAuth(Home);
