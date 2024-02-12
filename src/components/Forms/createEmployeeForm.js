'use client'
import React, { useState } from 'react'
import { FormInput } from './formInputTypes';
import styles from './createEmployeeForm.module.css'
import appStore from '@/store/appStore';

export const CreateEmployeeForm = (props) => {
    const [formData,setFormData]=useState();
    // const [val,setVal]=useState();
    const {items,filledData}=props;
    let filledObj
    if(filledData){
    filledObj=filledData[0];
    }
    // console.log(filledObj);
    const handleChange=(eve)=>{
        const feildName=eve.target.name;
        const data=eve.target.value;
        setFormData({...formData,[feildName]:data})
    }

    const handleSubmit=(eve)=>{
        eve.preventDefault();
        console.log(formData);
        appStore.dispatch({
            type:"FORM_DATA",
            payload:formData
        })
        alert("data sent to store")
        setFormData('');
    }
    
  return (
    <div>
        
        <form onSubmit={handleSubmit}>
        <div>
        {
            items.map((item,ind)=>{
                // console.log(filledObj[item.varName]?'yes':'no');
                let val
                if(filledObj){
                    val=filledObj[item.varName]?filledObj[item.varName]:'';
                }

                return (
                    <div key={`field_${ind}`} className={styles.fieldCont} >
                        <div className={styles.field}>
                            <div>
                                <label>{item.name}</label>
                            </div>
                            <FormInput {...item} handleChange={handleChange} value={val} />
                        </div>
                    </div>
                )
            })
        }
        </div>
        <div style={{textAlign:"center"}}>
            <button type='submit'>
                Submit
            </button>
        </div>
        </form>
    </div>
  )
}
