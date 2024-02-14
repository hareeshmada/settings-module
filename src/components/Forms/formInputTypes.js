'use client'
import React from 'react'
import styles from './formInputTypes.module.css'

export const FormInput = (props) => {
    const {type,regExp,errMsg,req,name,fieldType,options,handleChange,varName,filledObj1}=props;
    // if(value){
    //     console.log("hha")
    // }
    switch(fieldType){
        case "normal":
            return (
                
                <input type={type} placeholder={name} className={styles.inputField} onChange={(event)=>{handleChange(event,regExp,varName,errMsg,req)}} name={varName} value={filledObj1 && filledObj1[varName] !== undefined?filledObj1[varName]:''} required={req}></input>
            )
        case "select":

            return (
                <select className={styles.inputField} onChange={(event)=>{handleChange(event,regExp,varName,errMsg,req)}} name={varName} value={filledObj1&& filledObj1[varName] !== undefined ?filledObj1[varName]:''}>
                    {
                        options.map((item,ind)=>{
                            return <option key={`op_${ind}`} value={item}>{item}</option>
                        })
                    }
                </select>
            )
    }
}
