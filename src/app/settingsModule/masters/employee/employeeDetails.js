'use client'
import React, { useEffect, useState } from 'react'
import styles from './employeeDetails.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import appStore from '@/store/appStore'
import { ShimmerTable } from 'react-shimmer-effects'


export const EmployeeDetails = (props) => {
    const router=useRouter();
    const {data,headers}=props;
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },5000)
        
    },[]);
    // console.log(data);
    
    // console.log(configFilled);
    
    const handleRemove=(id)=>{
        console.log("remove",id);
        appStore.dispatch({
            type:"REMOVE",
            payload:id
        })
    }
    if(loading){
        return <ShimmerTable row={4} col={4}/>
    }
  return (
    <div className={styles.detailsContainer}>
        {data.length === 0?<h3>No Employees</h3>:
        <table>
            <thead>
                <tr className={styles.throw}>
                    {
                        headers.map((item,ind)=>{
                            return <th key={`th_${ind}`}>{item.name}</th>
                        })
                    }
                    <th>
                        Edit
                    </th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
            {
                data?.map((item,ind)=>{
                    const configFilled={
                        "filledData":item,
                        "formConfig":headers
                    }
                    const configFilleddata=encodeURIComponent(JSON.stringify(configFilled));
                    return(
                        <tr className={styles.tbrow} key={`di${ind}`}>
                            {
                                headers.map((configItem,indexx)=>{
                                    return <td key={`td_${indexx}`} >{item[configItem.varName]?item[configItem.varName]:""}</td>
                                })
                            }
                            {/* <td><button className={styles.editBtn} onClick={handleEdit}>Edit</button></td>
                            <td><button className={styles.editBtn} onClick={handleRemove}>Remove</button></td> */}
                            <td><Link href={{
                                pathname:'employee/editemployee',
                                query:{configFilleddata:configFilleddata}
                            }} className={styles.editBtn}>Edit</Link></td>
                            <td><button className={styles.editBtn} onClick={()=>{
                                handleRemove(item.empId);
                            }}>Remove</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
            
        </table>}
        
    </div>
  )
}
