'use client'
import React from 'react'
import Link from 'next/link'
import styles from './masters.module.css'
import { usePathname } from 'next/navigation'
import { Settings } from '@/app/settingsModule/settings'

export const SubSettings = (props) => {
    const pathname=usePathname();
    
    const {items,settingsBoolean}= props;
  return (
    <div>
        {settingsBoolean=== false?'':<Settings/>}
        <ul className={styles.navBar}>
            {
                items?.map((item,ind)=>{
                    
                    return <li key={`li_${ind}`} >
                        <Link href={item.path}><div className={`${styles.link_style} ${pathname === item.path || pathname.includes(item.path) ? styles.staying:""}`}>{item.name}</div></Link>

                    </li>
                })
            }
            
        </ul>
    </div>
  )
}
