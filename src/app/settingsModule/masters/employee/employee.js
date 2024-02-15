'use client'
import React from 'react'
import { Masters } from '../masters';
import styles from './employee.module.css'
import { employeeItems } from './configuration';
import { SubSettings } from '@/components/subSettings/subSettings';
import { EmployeeDetails } from './employeeDetails';
import { connect } from 'react-redux';
import { createEmpFields } from './createNew/configuration';
import { useSelector } from 'react-redux';
import isAuth from '@/components/authentication/isAuth';

let Employee = (props) => {
  // const {formData}=props;
  const formData=useSelector(state => state.formDataReducer.formData);
  // const loggedIn=useSelector(state => state.loginOrLogoutReducer.loggedIn);
  // console.log('hello',formData,loggedIn);
  return (
    <div>
      <div>
      <Masters/>
      {/* <h3>Employee</h3> */}
      <SubSettings items={employeeItems} settingsBoolean={false} />
      <EmployeeDetails data={formData} headers={createEmpFields}/>
    </div>
    </div>
  )
}
// Employee=connect(
//   function(state){
//     const {formData}=state.formDataReducer
//     return{
//       formData
//     }
//   }
// )(Employee)

export default isAuth(Employee);