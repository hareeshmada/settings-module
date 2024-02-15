'use client'
import React from 'react'
import Link from 'next/link'
import styles from './dashboard.module.css'
import { useSelector } from 'react-redux'
import appStore from '@/store/appStore'
import { useRouter } from 'next/navigation'

export const Dashboard = () => {
    const router=useRouter();
    const isLoggedIn=useSelector(state =>state.loginOrLogoutReducer.loggedIn);
    const handleLogout=()=>{
        const val=confirm("Do you really wants to logout??");
        if(val){
            appStore.dispatch({
                type:'LOGGED',
                payload:false
            })
            router.push('/login')
        }
    }
  return (
    <div>
        <ul className={styles.dashItemsCont}>
            <li><Link href="/settingsModule/masters/employee"><div>Home Settings</div></Link></li>
            {!isLoggedIn?<li><Link href='/login'><div>Login</div></Link></li>
            :<li><button className={styles.logoutBtn} onClick={handleLogout}>Logout</button></li>}
        </ul>
        
        
    </div>
  )
}
