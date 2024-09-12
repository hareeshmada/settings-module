'use client'
import React from 'react'
import Link from 'next/link'
import styles from './dashboard.module.css'
import { useSelector } from 'react-redux'
import appStore from '@/store/appStore'
import { useRouter } from 'next/navigation'
import { mainNavItems } from './configuration'
import { usePathname } from 'next/navigation'

export const Dashboard = () => {
    const pathname=usePathname();
    const router=useRouter();
    const isLoggedIn=useSelector(state =>state.loginOrLogoutReducer.loggedIn);
    const handleLogout=()=>{
        const val=confirm("Do you really wants to logout??");
        if(val){
            localStorage.removeItem('authToken');
            localStorage.removeItem('authTokenExpiry');
            alert("logged out successfully!")
            appStore.dispatch({
                type:'LOGGED',
                payload:false
            })
            router.push('/login')
        }
    }
    const token=localStorage.getItem('authToken');
  return (
    <div>
        <ul className={styles.dashItemssidenav}>
            {/* <li><div>hii</div></li>
            <li><Link href="/settingsModule/masters/employee"><div>Settings</div></Link></li> */}
            {mainNavItems?.map((item,ind)=>{
                return <li key={`li_${ind}`} >
                <Link href={item.path}><div className={`${styles.link_style} ${pathname === item.path || pathname.includes(item.path) ? styles.staying:""}`}>{item.name}</div></Link>
            </li>
            })}
            {/* {!isLoggedIn?<li><Link href='/login'><div>Login</div></Link></li>
            :<li><button className={styles.logoutBtn} onClick={handleLogout}>Logout</button></li>} */}
        </ul>
        <ul className={styles.dashItemstopnav}>
            {!token?<li><Link href='/login'><div>Login</div></Link></li>
            :<li><button className={styles.logoutBtn} onClick={handleLogout}>Logout</button></li>}
        </ul>
        {!token?<div style={{display:'flex',justifyContent:'center',height:'100vh',alignItems:'center'}}>
            <h3>Welcome to web application!!<br></br>Please login to see the modules</h3>
        </div>:''}
        
    </div>
  )
}
