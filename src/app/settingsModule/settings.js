'use client'
import Link from 'next/link'
import React from 'react'
import styles from './settings.module.css'
import { usePathname } from 'next/navigation'
import { Dashboard } from '@/components/dashboard/dashboard'

export const Settings = () => {
  const pathname=usePathname();
  const masters_path="/settingsModule/masters";
  const compliance_path="/settingsModule/compliance";
  return (
    <div className={styles.mainnav}>
      <Dashboard/>
      <ul className={styles.navBar}>
        <li ><Link href={`${masters_path}/employee`}><div className={`${styles.link_style} ${pathname === masters_path || pathname.includes(masters_path) ?styles.staying:""}`}>Masters</div></Link></li>
        <li ><Link href={`${compliance_path}/driver`}><div className={`${styles.link_style} ${pathname === compliance_path|| pathname.includes(compliance_path) ?styles.staying:""}`}>Compliance</div></Link></li>
      </ul>
        
        
    </div>
  )
}
