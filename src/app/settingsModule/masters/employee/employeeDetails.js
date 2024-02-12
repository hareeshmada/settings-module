'use client'
import React from 'react'
import styles from './employeeDetails.module.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export const EmployeeDetails = (props) => {
    const router=useRouter();
    const {data,headers}=props;
    // console.log(data);
    const configFilled={
        "filledData":data,
        "formConfig":headers
    }
    console.log(configFilled);
    const handleEdit=()=>{
        console.log("edit");
        console.log(data);
        // router.push(
        //     'employee/editemployee',{ filledData: JSON.stringify(data) }
        //   );
    }
    const handleRemove=()=>{
        console.log("remove");
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
                                query:{configFilleddata:JSON.stringify(configFilled)}
                            }}>Edit</Link></td>
                        </tr>
                    )
                })
            }
            </tbody>
            
        </table>}
        
    </div>
  )
}
