'use client'
import React, { useState } from 'react'
import { loginConfig } from './configuration'
import { FormInput } from '@/components/Forms/formInputTypes'
import { Button } from '@/components/buttons/button'
import styles from './login.module.css'
import { useRouter } from 'next/navigation'
import appStore from '@/store/appStore'


export const Login = () => {
    const router=useRouter();
    const [fieldsData,setFieldsData]=useState({});
    const [errBool,setErrBool]=useState(false);
    const handleChange=(eve)=>{
        const feildName=eve.target.name;
        const data=eve.target.value;
        console.log(eve.target.value)
        setFieldsData({...fieldsData,[feildName]:data})
    }
    const handleLogin=()=>{
        const {uname,pwd}=fieldsData;
        if(uname==='hareesh' && pwd ==='hareesh@123'){
            localStorage.setItem('authToken', 'mocked-jwt-token');
            const expiry=10*1000;
            const current=new Date().getTime();
            localStorage.setItem('authTokenExpiry',current+expiry);
            alert("Logged in successfully!!😊");
            appStore.dispatch({
                type:"LOGGED",
                payload:true
            })
            router.push('/settingsModule/masters/employee');
        }
        else{
            setErrBool(true);
        }

    }
  return (
    <div className={styles.mainCont}>
        <div className={styles.loginCard}>
            <h2>Login</h2>
            <div>
                {
                    loginConfig.map((item,ind)=>{
                        return (
                            <div className={styles.field} key={`field_${ind}`}><FormInput {...item} handleChange={handleChange} filledObj1={fieldsData}/></div>
                        )
                    })
                }
                <div>{
                    errBool==true&&<p className={styles.errMsg}>user name or password incorrect!!</p>
                    }</div>
            </div>
            <div className={styles.loginBtn}>
                <Button handleClick={handleLogin}>Login</Button>
            </div>

        </div>

    </div>
  )
}
