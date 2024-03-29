'use client'
import React from 'react'
import Employee from '../employee'
import { createEmpFields } from './configuration'
import { CreateEmployeeForm } from '@/components/Forms/createEmployeeForm'
import isAuth from '@/components/authentication/isAuth'

const CreateNew = () => {
  return (
    <div>
        {/* <Employee/> */}
        <h3>Creating Employee</h3>
        <CreateEmployeeForm items={createEmpFields} />
    </div>
  )
}
export default isAuth(CreateNew)
