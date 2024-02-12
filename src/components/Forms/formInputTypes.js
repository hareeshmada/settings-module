'use client'
import React from 'react'
import styles from './formInputTypes.module.css'

export const FormInput = (props) => {
    const {type,regExp,name,fieldType,options,handleChange,varName,value}=props;
    // if(value){
    //     console.log("hha")
    // }
    switch(fieldType){
        case "normal":
            return (
                
                <input type={type} placeholder={name} className={styles.inputField} onChange={handleChange} name={varName} value={value?value:''}></input>
            )
        case "select":
            return (
                <select className={styles.inputField} onChange={handleChange} name={varName} value={value?value:''}>
                    {
                        options.map((item,ind)=>{
                            return <option key={`op_${ind}`} value={item}>{item}</option>
                        })
                    }
                </select>
            )
    }
}
