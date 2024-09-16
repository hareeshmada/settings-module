'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FormInput } from './formInputTypes';
import styles from './createEmployeeForm.module.css'
import appStore from '@/store/appStore';
import { useRouter } from 'next/navigation';
import useIsOnline from '../customHooks/useIsOnline';
import useUserData from '../customHooks/useUserData';


export const CreateEmployeeForm = (props) => {
    const [formData,setFormData]=useState();
    const {items,filledData}=props;
    const router=useRouter();
    const [errBool,seterrBool]=useState(true);
    const [fld,setFld]=useState();
    const isOnline= useIsOnline();
    const {user, updateUser}=useUserData();
    const inputRef=useRef();
    useEffect(()=>{
    inputRef.current.focus();

            if(filledData){
                
                setFormData(filledData)
            }
    },[filledData])
    // console.log(filledObj);

    const handleChange=(eve,regExp,varName,errMsg,req)=>{
        const feildName=eve.target.name;
        const data=eve.target.value;
        let exp
        if(req){
            if(regExp){
                const reconstructedregExp=eval(regExp);
                exp=reconstructedregExp.test(data);
            }
            if(data=='' || exp!==undefined?!exp:data=='Select' ){
                seterrBool(false);
                setFld(varName);
            }
            else{
                seterrBool(true)
            }
        }
        else{
            setFld(varName);
            regExp?seterrBool(eval(regExp).test(data)):seterrBool(true);
        }
    
        

        setFormData({...formData,[feildName]:data})
    }

    const handleSubmit=(eve)=>{
        eve.preventDefault();
        updateUser({...user,...formData});
        appStore.dispatch({
            type:"FORM_DATA",
            payload:formData
        })
        alert("data sent to store")
        setFormData('');
        router.push('/settingsModule/masters/employee')
    }
    
  return (
    <div>
        
        <form onSubmit={handleSubmit}>
        <div>
        {
            items.map((item,ind)=>{

                return (
                    <div key={`field_${ind}`} className={styles.fieldCont} >
                        <div className={styles.field}>
                            <div>
                                {!errBool&& fld==item.varName ?<label className={styles.errMsg}>{item.errMsg}</label>:<label>{item.name}</label>}
                            </div>
                            <FormInput {...item} handleChange={handleChange} filledObj1={formData} inputRef={inputRef} />
                        </div>
                    </div>
                )
            })
        }
        </div>
        <div style={{textAlign:"center",marginTop:"20px"}}>
            <button type='submit' className={`${styles.submitBtn} ${!isOnline?styles.offlineBtn:''}`} disabled={!isOnline}>
                Submit
            </button>
        </div>
        </form>
    </div>
  )
}
