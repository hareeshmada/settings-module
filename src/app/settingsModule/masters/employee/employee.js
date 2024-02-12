'use client'
import React from 'react'
import { Masters } from '../masters';
import styles from './employee.module.css'
import { employeeItems } from './configuration';
import { SubSettings } from '@/components/subSettings/subSettings';
import { EmployeeDetails } from './employeeDetails';
import { connect } from 'react-redux';
import { createEmpFields } from './createNew/configuration';

let Employee = (props) => {
  const {formData}=props;
  
  return (
    <div>
      <Masters/>
      {/* <h3>Employee</h3> */}
      <SubSettings items={employeeItems} settingsBoolean={false} />
      <EmployeeDetails data={formData} headers={createEmpFields}/>
    </div>
  )
}
Employee=connect(
  function(state){
    const {formData}=state.formDataReducer
    return{
      formData
    }
  }
)(Employee)

export default Employee;